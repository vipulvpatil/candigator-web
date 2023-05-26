import CandidateList from "./candidate_list"
import CandidatesIcon from "@/icons/candidates"
import GrpcService from "@/lib/grpc/service"
import StatusBox from "@/app/status_box"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Candidates = async () => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <></>
  }

  const candidateList = await getCandidateListFor(session.user.email)

  return (
    <>
      <div className="inline-flex align-middle w-[44px] fill-black/50 relative top-[-19px] left-[-4px]">
        <CandidatesIcon/>
      </div>
      <div className="inline-flex text-[32px] font-regular text-black/50 relative top-[-9px] left-[-4px]">
        {candidateList.length} candidates in total
      </div>
      <div className="grid grid-cols-7 border-t-[1px] border-subtle">
        <CandidateList candidates={candidateList}/>
      </div>
      <StatusBox/>
    </>
  )
}

const dummy_candidate_list = [
  {name: "Vipul Patil", designation: "Senior Software Engineer", company: "Ai Retreat Inc.", updated_at: "10 days ago"},
  {name: "Vipul Vinod Patil", designation: "Senior Software Engineer Extraordinaire", company: "Confusing Labs Incorporated.", updated_at: "2 days ago"},
  {name: "Patil Vipul", designation: "Really Senior Software Engineer", company: "Boincase Inc.", updated_at: "1 day ago"},
  {name: "Mr. Vipul V Patil", designation: "Senior Staff Software Engineer", company: "Local company LLC", updated_at: "63 days ago"},
  {name: "Vipul V. Patil", designation: "Junior Software Engineer", company: "Jobless", updated_at: "14 days ago"},
]

const getCandidateListFor = async (userEmail) => {
  // This code will return default data until the GRPC Service function is defined.
  const func = GrpcService.getCandidateList || (
    () => {
      const count = Math.floor(Math.random() * (15 - 5 + 1) + 5)

      return [...Array(count)].map((value, i) => {
        const candidate = dummy_candidate_list[i%dummy_candidate_list.length]
        return Object.assign({id: i}, candidate)
      })
    }
  )
  return await func(userEmail)
}

export default Candidates
