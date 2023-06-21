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

  const files = await req.json()
  const fileUploads = await GrpcService.completeFileUploads(session.user.email, files)

  return NextResponse.json({fileUploads})
}

export const GET = async (req) => {
  const session = await getServerSession(authOptions)
  if(!session || !session.user || !session.user.email) {
    return NextResponse.json(
      {error: "Unauthorized"},
      {status: 401}
    )
  }

  const files = await req.json()
  const fileUploads = await GrpcService.completeFileUploads(session.user.email, files)

  return NextResponse.json({fileUploads})
}
