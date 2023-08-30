import CandidateList from "./candidate_list"
import GrpcService from "@/lib/grpc/service"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"
import {processCandidates} from "@/lib/candidate-builder/candidate"

const Candidates = async () => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <></>
  }

  const candidateList = await getCandidateListFor(session.user.email)

  return (
    <div className="min-h-[620px] bg-gray-200">
      <CandidateList candidates={candidateList}/>
    </div>
  )
}

const getCandidateListFor = async (userEmail) => {
  const response = await GrpcService.getCandidates(userEmail)
  const candidates = processCandidates(response.data)
  console.log(candidates)
  return candidates
}

export default Candidates
