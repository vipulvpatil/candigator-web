import GrpcService from "@/lib/grpc/service"
import {NextResponse} from "next/server"
import {authOptions} from "../auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

export const POST = async (req) => {
  const session = await getServerSession(authOptions)
  if(!session || !session.user || !session.user.email) {
    return NextResponse.json(
      {error: "Unauthorized"},
      {status: 401}
    )
  }

  const candidate = await req.json()
  await GrpcService.updateCandidate(session.user.email, candidate.id, candidate.manuallyCreatedPersona)

  return NextResponse.json({})
}
