const CandidateRow = ({row_id}) => {
  return <>
    <div key={`name_${row_id}}`}>{"Vipul V Patil"}</div>
    <div key={`job_${row_id}}`}>{"Senior Software Engineer"}</div>
    <div key={`company_${row_id}}`}>{"Ai Retreat Inc."}</div>
    <div key={`updated_${row_id}}`}>{"20 days ago"}</div>
  </>
}

export default CandidateRow
