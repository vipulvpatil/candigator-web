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
  const response = await GrpcService.updateCandidate(session.user.email, candidate.id, candidate.manuallyCreatedPersona)

  if (response.error) {
    return NextResponse.json(
      {error: response.error},
      {status: 500}
    )
  }

  return NextResponse.json({data: response.data})
}
