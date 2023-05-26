import CandidateList from "./candidate_list"
import PageTitle from "@/app/(dashboard)/page_title"
import StatusBox from "@/app/status_box"

const Candidates = () => {
  return (
    <>
      <PageTitle title="Candidates"/>
      <div class="grid grid-cols-4">
        <CandidateList rows={[1,2,3,4,5]}/>
      </div>
      <StatusBox/>
    </>
  )
}

export default Candidates
