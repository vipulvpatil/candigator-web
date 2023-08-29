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
  const completeFileUploadsRequest = {
    userEmail: userEmail,
    fileUploadUpdates
  }
  return await grpcServiceClient().completeFileUploads(
    completeFileUploadsRequest, md
  ).then((completeFileUploadsResponse) => {
    return completeFileUploadsResponse.fileUploads
  }).catch((err) => {
    handleGrpcError(err)
    return err.details
  })
}

const getUnprocessedFileUploadsCount = async (userEmail) => {
  if (!userEmail) {
    return
  }
  const md = metadataWithRequestingUserEmail(userEmail)
  const GetUnprocessedFileUploadsCountRequest = {
    userEmail: userEmail
  }
  return await grpcServiceClient().getUnprocessedFileUploadsCount(
    GetUnprocessedFileUploadsCountRequest, md
  ).then((GetUnprocessedFileUploadsCountResponse) => {
    return GetUnprocessedFileUploadsCountResponse.count
  }).catch((err) => {
    handleGrpcError(err)
    return err.details
  })
}

const getFileUploads = async (userEmail) => {
  if (!userEmail) {
    return
  }
  const md = metadataWithRequestingUserEmail(userEmail)
  const GetFileUploadsRequest = {
    userEmail: userEmail
  }
  return await grpcServiceClient().getFileUploads(
    GetFileUploadsRequest, md
  ).then((GetFileUploadsResponse) => {
    return GetFileUploadsResponse.fileUploads
  }).catch((err) => {
    handleGrpcError(err)
    return err.details
  })
}

const getCandidates = async (userEmail) => {
  if (!userEmail) {
    return
  }
  const md = metadataWithRequestingUserEmail(userEmail)
  const GetCandidatesRequest = {
    userEmail: userEmail
  }
  return await grpcServiceClient().getCandidates(
    GetCandidatesRequest, md
  ).then((GetCandidatesResponse) => {
    return GetCandidatesResponse.candidates
  }).catch((err) => {
    handleGrpcError(err)
    return err.details
  })
}

const getCandidate = async (userEmail, id) => {
  if (!userEmail) {
    return
  }
  const md = metadataWithRequestingUserEmail(userEmail)
  const GetCandidateRequest = {
    userEmail: userEmail,
    id: id
  }
  return await grpcServiceClient().getCandidate(
    GetCandidateRequest, md
  ).then((GetCandidateResponse) => {
    return GetCandidateResponse.candidate
  }).catch((err) => {
    handleGrpcError(err)
    return err.details
  })
}

const updateCandidate = async (userEmail, id, manuallyCreatedPersona) => {
  if (!userEmail) {
    return
  }
  const md = metadataWithRequestingUserEmail(userEmail)
  const UpdateCandidateRequest = {
    userEmail: userEmail,
    id: id,
    manuallyCreatedPersona: manuallyCreatedPersona
  }
  return await grpcServiceClient().updateCandidate(
    UpdateCandidateRequest, md
  ).then((UpdateCandidateResponse) => {
    return UpdateCandidateResponse
  }).catch((err) => {
    handleGrpcError(err)
    return err.details
  })
}

const GrpcService = {
  checkConnection,
  uploadFiles,
  completeFileUploads,
  getUnprocessedFileUploadsCount,
  getFileUploads,
  getCandidates,
  getCandidate,
  updateCandidate,
}

export default GrpcService
