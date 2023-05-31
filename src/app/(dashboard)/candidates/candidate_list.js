"use client"

import {useEffect, useState} from "react"
import AddCandidateIcon from "@/icons/add_candidate"
import AddCandidateModal from "./add_candidate_modal"
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
  const [showAddCandidateModal, setShowAddCandidateModal] = useState(false)

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
    return <>
      <div className="col-span-2 text-right">
        <AddCandidateButton handleClick={() => {setShowAddCandidateModal(true)}}/>
      </div>
    </>
  }

  return <>
    <div className="col-span-2 text-right">
      <AddCandidateButton handleClick={() => {setShowAddCandidateModal(true)}}/>
    </div>
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
        handlePageSelected={(pageNumber) => {setSelectedPage(pageNumber)}}
      />
    </div>
    <div className="col-span-3"></div>
    <CandidateDetails candidate={selectedCandidate} onClose={() => setSelectedCandidateId(null)}/>
    <AddCandidateModal show={showAddCandidateModal} handleClose={() => setShowAddCandidateModal(false)}/>
  </>
}

const AddCandidateButton = ({handleClick}) => {
  return (
    <button className="
      bg-bold hover:bg-dark text-white text-[18px]
      fill-white rounded p-[6px]
      drop-shadow-button"
      onClick={handleClick}
    >
      <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
        <AddCandidateIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px]">
        {"Add Candidate"}
      </div>
    </button>
  )
}

export default CandidateList
