import {buildPersona, buildResultantPersona} from "@/lib/candidate-builder/persona"
import CandidateList from "./candidate_list"
import GrpcService from "@/lib/grpc/service"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

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

const processCandidates = (candidates) => {
  return candidates.map(candidate => {
    const aiGeneratedPerson = buildPersona(candidate.aiGeneratedPersona)
    const manuallyCreatedPersona = buildPersona(candidate.manuallyCreatedPersona)
    const displayPersona = buildResultantPersona(aiGeneratedPerson, manuallyCreatedPersona)
    Object.assign(candidate, {
      name: displayPersona.Name,
      designation: displayPersona["Recommended Roles"][0],
      company: displayPersona["Education"][0]["Institute"],
      updated_at: "324 days ago",
      displayPersona: displayPersona,
    })
    return candidate
  })
}

export default Candidates
