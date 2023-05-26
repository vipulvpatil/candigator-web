const CandidateDetails = ({candidate}) => {
  console.log("begin")
  if (!candidate) {
    return <></>
  }

  console.log("what")
  return <div>
    <div>{candidate.id}</div>
    <div>{candidate.name}</div>
    <div>{candidate.designation}</div>
    <div>{candidate.company}</div>
    <div>{candidate.updated_at}</div>
  </div>
}

export default CandidateDetails
