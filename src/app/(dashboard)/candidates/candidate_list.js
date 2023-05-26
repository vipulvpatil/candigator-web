"use client"

import CandidateRow from "./candidate_row"
import {useState} from "react"

const CandidateList = ({candidates}) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null)

  return candidates.map((candidate) => {
    return (
      <CandidateRow
        key={candidate.id}
        candidate={candidate}
        selected={selectedCandidate === candidate.id}
        setSelectedCandidate={setSelectedCandidate}
      />
    )
  })
}

export default CandidateList
