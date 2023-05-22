const GrpcErrorCodes = {
  NOT_FOUND: 5,
  UNAVAILABLE: 14,
}

const errorIsNotFound = (error) => {
  return error.code === GrpcErrorCodes.NOT_FOUND
}

const errorIsUnavailable = (error) => {
  return error.code === GrpcErrorCodes.UNAVAILABLE
}

const ErrorChecker = {
  errorIsNotFound,
  errorIsUnavailable
}

export default ErrorChecker
