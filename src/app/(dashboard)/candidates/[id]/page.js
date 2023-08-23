import GrpcService from "@/lib/grpc/service"
import PersonaForm from "./persona_form"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"
import {processCandidate} from "@/lib/candidate-builder/candidate"

const Candidate = async ({params}) => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <></>
  }

  let candidate = await GrpcService.getCandidate(session.user.email, params.id)
  console.log(candidate)
  if(!candidate || !candidate.id) {
    return (
      <div className="grid grid-cols-7 min-h-[620px] w-full">
        {"No candidate found"}
      </div>
    )
  }
  candidate = processCandidate(candidate)

  return (
    <div className="grid grid-cols-7 min-h-[620px] w-full">
      <PersonaForm candidate={candidate}/>
    </div>
  )
}

export default Candidate
