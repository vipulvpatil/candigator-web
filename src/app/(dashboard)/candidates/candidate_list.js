import CandidateRow from "./candidate_row"

const CandidateList = ({candidates}) => {
  return candidates.map((candidate, i) => {
    return (
      <CandidateRow key={i} candidate={candidate}/>
    )
  })
}

export default CandidateList
