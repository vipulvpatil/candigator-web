import CandidateList from "./candidate_list"
import GrpcService from "@/lib/grpc/service"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"
import {processCandidates} from "@/lib/candidate-builder/candidate"

export const metadata = {
  title: "Prospect Candidates",
}

const Candidates = async () => {
  let candidates
  const session = await getServerSession(authOptions)
  if(session) {
    const response = await GrpcService.getCandidates(session.user.email)
    candidates = processCandidates(response.data)
    console.log(candidates)
  }
  return <CandidateList candidates={candidates} loggedIn={!!session}/>
}

export default Candidates
