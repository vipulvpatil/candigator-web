import "server-only"
import ErrorChecker from "@/lib/common/error_checker"
import {Metadata} from "@grpc/grpc-js"
import {grpcServiceClient} from "./client"


const handleGrpcError = (err) => {
  if(ErrorChecker.errorIsUnavailable(err)) {
    global.refreshGrpcClient = true
  }
  console.log("err: ", err)
}

const metadataWithRequestingUserEmail = (userEmail) => {
  const metadata = new Metadata()
  if (userEmail) {
    metadata.add("requesting_user_email", userEmail)
  }
  return metadata
}

const checkConnection = async (userEmail) => {
  if (!userEmail) {
    return
  }
  const md = metadataWithRequestingUserEmail(userEmail)
  const checkConnectionRequest = {}
  return await grpcServiceClient().checkConnection(
    checkConnectionRequest, md
  ).then((checkConnectionResponse) => {
    return checkConnectionResponse
  }).catch((err) => {
    handleGrpcError(err)
  })
}

const GrpcService = {
  checkConnection,
}

export default GrpcService
