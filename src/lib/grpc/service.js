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
    return {data: checkConnectionResponse.connectionStatus}
  }).catch((err) => {
    handleGrpcError(err)
    return {error: err.details}
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
    return {data: uploadFilesResponse.fileUploads}
  }).catch((err) => {
    handleGrpcError(err)
    return {error: err.details}
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
    return {data: completeFileUploadsResponse.fileUploads}
  }).catch((err) => {
    handleGrpcError(err)
    return {error: err.details}
  })
}

const getUserData = async (userEmail) => {
  if (!userEmail) {
    return
  }
  const md = metadataWithRequestingUserEmail(userEmail)
  const GetUserDataRequest = {
    userEmail: userEmail
  }
  return await grpcServiceClient().getUserData(
    GetUserDataRequest, md
  ).then((GetUserDataResponse) => {
    return {data: GetUserDataResponse}
  }).catch((err) => {
    handleGrpcError(err)
    return {error: err.details}
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
    return {data: GetUnprocessedFileUploadsCountResponse.count}
  }).catch((err) => {
    handleGrpcError(err)
    return {error: err.details}
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
    return {data: GetFileUploadsResponse.fileUploads}
  }).catch((err) => {
    handleGrpcError(err)
    return {error: err.details}
  })
}

const getFileUpload = async (userEmail, id) => {
  if (!userEmail) {
    return
  }
  const md = metadataWithRequestingUserEmail(userEmail)
  const GetFileUploadRequest = {
    userEmail: userEmail,
    id: id
  }
  return await grpcServiceClient().getFileUpload(
    GetFileUploadRequest, md
  ).then((GetFileUploadResponse) => {
    return {data: GetFileUploadResponse.fileUpload}
  }).catch((err) => {
    handleGrpcError(err)
    return {error: err.details}
  })
}

const deleteFileUpload = async (userEmail, id) => {
  if (!userEmail) {
    return
  }
  const md = metadataWithRequestingUserEmail(userEmail)
  const DeleteFileUploadRequest = {
    userEmail: userEmail,
    id: id
  }
  return await grpcServiceClient().deleteFileUpload(
    DeleteFileUploadRequest, md
  ).then((DeleteFileUploadResponse) => {
    return {data: DeleteFileUploadResponse}
  }).catch((err) => {
    handleGrpcError(err)
    return {error: err.details}
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
    return {data: GetCandidatesResponse.candidates}
  }).catch((err) => {
    handleGrpcError(err)
    return {error: err.details}
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
    return {data: GetCandidateResponse.candidate}
  }).catch((err) => {
    handleGrpcError(err)
    return {error: err.details}
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
    return {data: UpdateCandidateResponse}
  }).catch((err) => {
    handleGrpcError(err)
    return {error: err.details}
  })
}

const GrpcService = {
  checkConnection,
  uploadFiles,
  completeFileUploads,
  getUserData,
  getUnprocessedFileUploadsCount,
  getFileUploads,
  getFileUpload,
  deleteFileUpload,
  getCandidates,
  getCandidate,
  updateCandidate,
}

export default GrpcService
