import CandidateList from "./candidate_list"
import GrpcService from "@/lib/grpc/service"
import LoggedOut from "../logged_out"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"
import {processCandidates} from "@/lib/candidate-builder/candidate"

const Candidates = async () => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <LoggedOut/>
  }

  const response = await GrpcService.getCandidates(session.user.email)
  const candidates = processCandidates(response.data)
  console.log(candidates)

  return <CandidateList candidates={candidates}/>
}

export default Candidates
