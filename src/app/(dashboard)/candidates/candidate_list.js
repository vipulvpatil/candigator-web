"use client"

import {useEffect, useState} from "react"
import CandidateDetails from "./candidate_details"
import CandidateRow from "./candidate_row"
import PageNumbers from "@/components/page_numbers"

const CANDIDATES_PER_PAGE = 10

const CandidateList = ({candidates}) => {
  const [selectedCandidateId, setSelectedCandidateId] = useState(null)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [selectedPage, setSelectedPage] = useState(1)
  const pageCount = Math.ceil(candidates.length/CANDIDATES_PER_PAGE)
  const [visibleCandidates, setVisibleCandidates] = useState([])

  useEffect(() => {
    // TODO: This is inefficient. Make it better
    let matchedCandidate = null
    candidates.forEach(candidate => {
      if(candidate.id === selectedCandidateId) {
        matchedCandidate = candidate
      }
    })
    setSelectedCandidate(matchedCandidate)
  }, [selectedCandidateId, candidates])

  useEffect(() => {
    const initialIndex = (selectedPage-1) * CANDIDATES_PER_PAGE
    setVisibleCandidates(candidates.slice(initialIndex, initialIndex+CANDIDATES_PER_PAGE))
  }, [selectedPage, candidates])

  if(!visibleCandidates || visibleCandidates.length === 0) {
    return <></>
  }

  return <>
    {visibleCandidates.map((candidate) => {
      return <CandidateRow
        key={candidate.id}
        candidate={candidate}
        selected={selectedCandidateId === candidate.id}
        setSelectedCandidateId={setSelectedCandidateId}
      />
    })}
    <div className="col-span-4">
      <PageNumbers
        pageCount={pageCount}
        selectedPage={selectedPage}
        pageSelected={(pageNumber) => {setSelectedPage(pageNumber)}}
      />
    </div>
    <CandidateDetails candidate={selectedCandidate} onClose={() => setSelectedCandidateId(null)}/>
  </>
}

export default CandidateList
