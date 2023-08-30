import {emptyCandidate, processCandidate} from "@/lib/candidate-builder/candidate"
import GrpcService from "@/lib/grpc/service"
import PersonaForm from "./persona_form"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Candidate = async ({params}) => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <></>
  }

  if (!params.id){
    return <NoCandidateFound/>
  }

  if (params.id == "new") {
    return (
      <div className="min-h-[620px] bg-gray-200">
        <PersonaForm candidate={emptyCandidate}/>
      </div>
    )
  }

  let candidate = await GrpcService.getCandidate(session.user.email, params.id)
  if(!candidate || !candidate.id) {
    return <NoCandidateFound/>
  }
  candidate = processCandidate(candidate)

  return (
    <div className="min-h-[620px] bg-gray-200">
      <PersonaForm candidate={candidate} addNewCandidate={false}/>
    </div>
  )
}

const NoCandidateFound = () => {
  return (
    <div className="min-h-[620px] bg-gray-200">
      {"No candidate found"}
    </div>
  )
}

export default Candidate
