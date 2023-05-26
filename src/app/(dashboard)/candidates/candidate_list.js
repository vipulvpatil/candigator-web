"use client"

import {useEffect, useRef, useState} from "react"
import CandidateDetails from "./candidate_details"
import CandidateRow from "./candidate_row"

const CandidateList = ({candidates}) => {
  const [selectedCandidateId, setSelectedCandidateId] = useState(null)
  const selectedCandidate = useRef()

  useEffect(() => {
    // TODO: This is inefficient. Make it better
    candidates.forEach(candidate => {
      if(candidate.id === selectedCandidateId) {
        selectedCandidate.current = candidate
      }
    })
    console.log(selectedCandidate.current)
  }, [selectedCandidateId, candidates])

  const candidateRows = candidates.map((candidate) => {
    return <CandidateRow
      key={candidate.id}
      candidate={candidate}
      selected={selectedCandidateId === candidate.id}
      setSelectedCandidateId={setSelectedCandidateId}
    />
  })

  return <>
    {candidateRows}
    <CandidateDetails candidate={selectedCandidate.current}/>
  </>
}

export default CandidateList
