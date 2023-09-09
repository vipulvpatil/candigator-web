import CandidateList from "./candidate_list"
import GrpcService from "@/lib/grpc/service"
import LoggedOut from "@/app/(dashboard)/logged_out"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"
import {processCandidates} from "@/lib/candidate-builder/candidate"

const Candidates = async () => {
  let candidates
  const session = await getServerSession(authOptions)
  if(session) {
    const response = await GrpcService.getCandidates(session.user.email)
    candidates = processCandidates(response.data)
    console.log(candidates)
    return <CandidateList candidates={candidates}/>
  }

  return <LoggedOut/>
}

export default Candidates
