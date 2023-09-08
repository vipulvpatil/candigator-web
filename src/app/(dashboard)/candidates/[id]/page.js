import {emptyCandidate, processCandidate} from "@/lib/candidate-builder/candidate"
import GrpcService from "@/lib/grpc/service"
import LoggedOut from "@/app/(dashboard)/logged_out"
import PersonaForm from "./persona_form"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Candidate = async ({params}) => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <LoggedOut/>
  }

  if (!params.id){
    return <NoCandidateFound/>
  }

  if (params.id == "new") {
    return <PersonaForm candidate={emptyCandidate}/>
  }

  const response = await GrpcService.getCandidate(session.user.email, params.id)
  const candidate = processCandidate(response.data)

  if(!candidate || !candidate.id) {
    return <NoCandidateFound/>
  }

  return <PersonaForm candidate={candidate} addNewCandidate={false}/>
}

const NoCandidateFound = () => {
  return <>{"No candidate found"}</>
}

export default Candidate
