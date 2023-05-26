import CandidateRow from "./candidate_row"

const CandidateList = ({rows}) => {
  console.log(rows)
  return rows.map((row, i) => {
    console.log(row)
    return (
      <CandidateRow key={i} row_id={i}/>
    )
  })
}

export default CandidateList
