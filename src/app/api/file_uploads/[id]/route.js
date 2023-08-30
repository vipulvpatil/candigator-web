import GrpcService from "@/lib/grpc/service"
import {NextResponse} from "next/server"
import {authOptions} from "../../auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

export const DELETE = async (_req, {params}) => {
  const session = await getServerSession(authOptions)
  if(!session || !session.user || !session.user.email) {
    return NextResponse.json(
      {error: "Unauthorized"},
      {status: 401}
    )
  }

  const id = params.id
  const response = await GrpcService.deleteFileUpload(session.user.email, id)
  return NextResponse.json(response)
}
