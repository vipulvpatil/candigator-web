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
  const checkConnectionRequest = {
    UserEmail: userEmail
  }
  return await grpcServiceClient().checkConnection(
    checkConnectionRequest, md
  ).then((checkConnectionResponse) => {
    return checkConnectionResponse.ConnectionStatus
  }).catch((err) => {
    handleGrpcError(err)
    return err.details
  })
}

const uploadFiles = async (userEmail, files) => {
  if (!userEmail) {
    return
  }
  const md = metadataWithRequestingUserEmail(userEmail)
  console.log(files)
  const uploadFilesRequest = {
    UserEmail: userEmail,
    files
  }
  return await grpcServiceClient().uploadFiles(
    uploadFilesRequest, md
  ).then((uploadFilesResponse) => {
    return uploadFilesResponse.fileUploads
  }).catch((err) => {
    handleGrpcError(err)
    return err.details
  })
}

const GrpcService = {
  checkConnection,
  uploadFiles,
}

export default GrpcService
