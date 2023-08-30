import GrpcService from "@/lib/grpc/service"
import {NextResponse} from "next/server"
import {authOptions} from "../auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

export const GET = async () => {
  const session = await getServerSession(authOptions)
  if(!session || !session.user || !session.user.email) {
    return NextResponse.json(
      {error: "Unauthorized"},
      {status: 401}
    )
  }

  const response = await GrpcService.getUnprocessedFileUploadsCount(session.user.email)
  if (response.error) {
    return NextResponse.json(
      {error: response.error},
      {status: 500}
    )
  }

  return NextResponse.json({data: response.data})
}
