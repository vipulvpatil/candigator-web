"use client"

import {useEffect, useState} from "react"
import CandidateDetails from "./candidate_details"
import CandidateRow from "./candidate_row"

const CandidateList = ({candidates}) => {
  const [selectedCandidateId, setSelectedCandidateId] = useState(null)
  const [selectedCandidate, setSelectedCandidate] = useState(null)

  useEffect(() => {
    // TODO: This is inefficient. Make it better
    candidates.forEach(candidate => {
      if(candidate.id === selectedCandidateId) {
        setSelectedCandidate(candidate)
      }
    })
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
    <CandidateDetails candidate={selectedCandidate}/>
  </>
}

export default CandidateList
