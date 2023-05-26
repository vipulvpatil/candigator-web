const CandidateRow = ({candidate}) => {
  return <>
    <div>{candidate.name}</div>
    <div>{candidate.designation}</div>
    <div>{candidate.company}</div>
    <div>{candidate.updated_at}</div>
  </>
}

export default CandidateRow
