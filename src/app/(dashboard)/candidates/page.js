import CandidateList from "./candidate_list"
import GrpcService from "@/lib/grpc/service"
import PageTitle from "@/app/(dashboard)/page_title"
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
      <PageTitle title="Candidates"/>
      <div className="grid grid-cols-4">
        <CandidateList candidates={candidateList}/>
      </div>
      <StatusBox/>
    </>
  )
}

const getCandidateListFor = async (userEmail) => {
  // This code will return default data until the GRPC Service function is defined.
  const func = GrpcService.getCandidateList || (
    () => {
      const count = Math.floor(Math.random() * (15 - 5 + 1) + 5)

      return [...Array(count)].map(() => {
        return {name: "Vipul V Patil", designation: "Senior Software Engineer", company: "Ai Retreat Inc.", updated_at: "20 days ago"}
      })
    }
  )
  return await func(userEmail)
}

export default Candidates
