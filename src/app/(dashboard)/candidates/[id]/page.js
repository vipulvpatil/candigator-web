import {emptyCandidate, processCandidate} from "@/lib/candidate-builder/candidate"
import GrpcService from "@/lib/grpc/service"
import NoCandidateFound from "./no_candidate"
import PersonaForm from "./persona_form"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Candidate = async ({params}) => {
  let candidate
  const session = await getServerSession(authOptions)
  if (params.id === "new") {
    return <PersonaForm candidate={emptyCandidate} loggedIn={!!session} candidateId={params.id}/>
  }

  if(session) {
    if (!params.id){
      return <NoCandidateFound/>
    }

    const response = await GrpcService.getCandidate(session.user.email, params.id)
    candidate = processCandidate(response.data)
  }
  return <PersonaForm candidate={candidate} loggedIn={!!session} candidateId={params.id}/>
}

export default Candidate
