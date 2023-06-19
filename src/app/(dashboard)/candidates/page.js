import CandidateList from "./candidate_list"
import CandidatesIcon from "@/icons/candidates"
import GrpcService from "@/lib/grpc/service"
// import StatusBox from "@/app/status_box"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Candidates = async () => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <></>
  }

  const candidateList = await getCandidateListFor(session.user.email)

  return (
    <div className="grid grid-cols-7 min-h-[620px] w-full">
      <div className="col-span-2">
        <CandidatesCountTitle count={candidateList.length}/>
      </div>
      <div className="col-span-3"></div>
      <CandidateList candidates={candidateList}/>
    </div>
  )
}

const CandidatesCountTitle = ({count}) => {
  return <>
    <div className="inline-flex align-middle w-[44px] fill-black/50 relative top-[-19px] left-[-4px]">
      <CandidatesIcon/>
    </div>
    <div className="inline-flex text-[32px] font-regular text-black/50 relative top-[-9px] left-[-4px]">
      {`${count} candidates`}
    </div>
    </>
}

const dummy_candidate_list = [
  {name: "Vipul Patil", designation: "Senior Software Engineer", company: "Ai Retreat Inc.", updated_at: "10 days ago"},
  {name: "Vipul Vinod Patil", designation: "Senior Software Engineer Extraordinaire", company: "Confusing Labs Incorporated.", updated_at: "2 days ago"},
  {name: "Patil Vipul", designation: "Really Senior Software Engineer", company: "Boincase Inc.", updated_at: "1 day ago"},
  {name: "Mr. Vipul V Patil", designation: "Senior Staff Software Engineer", company: "Local company LLC", updated_at: "63 days ago"},
  {name: "Vipul V. Patil", designation: "Junior Software Engineer", company: "Jobless", updated_at: "14 days ago"},
  {name: "The Vipul Patil", designation: "Engineer", company: "Jobfull", updated_at: "22 days ago"},
  {name: "Patil Vipul Patil", designation: "Junior Engineer", company: "Jobhalf", updated_at: "324 days ago"},
]

const getCandidateListFor = async (userEmail) => {
  // This code will return default data until the GRPC Service function is defined.
  const func = GrpcService.getCandidateList || (
    () => {
      const count = Math.floor(Math.random() * (35 - 12 + 1) + 12)

      return [...Array(count)].map((value, i) => {
        const candidate = dummy_candidate_list[i%dummy_candidate_list.length]
        return Object.assign({id: i+1}, candidate)
      })
    }
  )
  return await func(userEmail)
}

export default Candidates
