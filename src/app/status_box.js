import "server-only"
import GrpcService from "@/lib/grpc/service"
import {authOptions} from "./api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

// NOTE: This is a test Component to easily verify GRPC service connectivity.

const StatusBox = async () => {
  let statusText = "unknown"
  const session = await getServerSession(authOptions)
  if(session) {
    statusText = "signed in"
    if(session.user && session.user.email) {
      const response = await GrpcService.checkConnection(session.user.email)
      statusText = response.data || response.error
    }
  }
  return <>{"Status: "}{statusText}</>
}

export default StatusBox
