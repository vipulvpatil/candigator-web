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
    userEmail: userEmail
  }
  return await grpcServiceClient().checkConnection(
    checkConnectionRequest, md
  ).then((checkConnectionResponse) => {
    return checkConnectionResponse.connectionStatus
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
  const uploadFilesRequest = {
    userEmail: userEmail,
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

const completeFileUploads = async (userEmail, fileUploadUpdates) => {
  if (!userEmail) {
    return
  }
  const md = metadataWithRequestingUserEmail(userEmail)
  console.log(fileUploadUpdates)
  const completeFileUploadsRequest = {
    userEmail: userEmail,
    fileUploadUpdates
  }
  return await grpcServiceClient().uploadFiles(
    completeFileUploadsRequest, md
  ).then((completeFileUploadsResponse) => {
    return completeFileUploadsResponse.fileUploads
  }).catch((err) => {
    handleGrpcError(err)
    return err.details
  })
}

const GrpcService = {
  checkConnection,
  uploadFiles,
  completeFileUploads,
}

export default GrpcService
