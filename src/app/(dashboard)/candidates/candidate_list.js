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
    let availableCadidates = candidates.slice(initialIndex, initialIndex+CANDIDATES_PER_PAGE)

    let emptyCandidateCount = 0
    while (availableCadidates.length < CANDIDATES_PER_PAGE) {
      availableCadidates.push(emptyCandidateCount)
      emptyCandidateCount = emptyCandidateCount + 1
    }
    setVisibleCandidates(availableCadidates)
  }, [selectedPage, candidates])

  if(!visibleCandidates || visibleCandidates.length === 0) {
    return <></>
  }

  return <>
    {visibleCandidates.map((candidate, index) => {
      if (candidate && candidate.id) {
        return <CandidateRow
        key={candidate.id}
        candidate={candidate}
        selected={selectedCandidateId === candidate.id}
        setSelectedCandidateId={setSelectedCandidateId}
        showTopBorder={index == 0}
        />
      } else {
        return <div key={`blank_${candidate}`} className="h-[51px] col-span-7"></div>
      }
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
