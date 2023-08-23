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
    <div className="grid grid-cols-7 min-h-[620px] w-full">
      <CandidateList candidates={candidateList}/>
    </div>
  )
}

const getCandidateListFor = async (userEmail) => {
  let candidates = await GrpcService.getCandidates(userEmail)
  console.log(candidates)
  candidates = processCandidates(candidates)
  return candidates
}

export default Candidates
