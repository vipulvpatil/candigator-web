const CandidateDetails = ({candidate}) => {
  console.log("begin")
  if (!candidate) {
    return <></>
  }

  console.log("what")
  return (
    <div
      className="
        absolute right-0 top-[83px] bottom-[27px]
        w-[400px]
        p-[22px]
        border-bold bg-white border-y-2 border-l-2 rounded-l-lg"
    >
      <div>{candidate.id}</div>
      <div>{candidate.name}</div>
      <div>{candidate.designation}</div>
      <div>{candidate.company}</div>
      <div>{candidate.updated_at}</div>
    </div>
  )
}

export default CandidateDetails
