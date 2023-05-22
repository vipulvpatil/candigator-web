import {Metadata, credentials, loadPackageDefinition} from "@grpc/grpc-js"
import ErrorChecker from "@/lib/common/error_checker"
import {loadSync} from "@grpc/proto-loader"
import path from "path"

const PROTO_PATH = path.resolve("./src/protos/server.proto")
const packageDefinition = loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
)

const apiServer = loadPackageDefinition(packageDefinition).protos

const decodeFromBase64 = (str) => {
  const decoded = Buffer.from(str, "base64").toString("ascii")
  return Buffer.from(decoded)
}

const newGRPCClient = () => {
  const caCert = decodeFromBase64(process.env.CA_CERT_BASE64)
  const clientKey = decodeFromBase64(process.env.CLIENT_KEY_BASE64)
  const clientCert = decodeFromBase64(process.env.CLIENT_CERT_BASE64)

  const channelArgs = {}

  if (process.env.GRPC_SERVER_SSL_TARGET_NAME_OVERRIDE){
    channelArgs["grpc.ssl_target_name_override"] = process.env.GRPC_SERVER_SSL_TARGET_NAME_OVERRIDE
  }

  const client = new apiServer.CandidateTrackerGo(
    process.env.GRPC_SERVER,
    credentials.createSsl(caCert, clientKey, clientCert),
    channelArgs
  )
  return client
}

const grpcClient = () => {
  if (!global.gprcClient || global.refreshGrpcClient) {
    global.refreshGrpcClient = false
    console.log("Creating new grpc client")
    global.gprcClient = newGRPCClient()
  }

  return global.gprcClient
}

const handleGrpcError = (reject, err) => {
  if(ErrorChecker.errorIsUnavailable(err)) {
    global.refreshGrpcClient = true
  }
  reject(err)
}

const metadataWithRequestingUserEmail = (userEmail) => {
  const metadata = new Metadata()
  if (userEmail) {
    metadata.add("requesting_user_email", userEmail)
  }
  return metadata
}

const checkConnection = (userEmail) => {
  const client = grpcClient()
  const checkConnectionRequest = {}

  return new Promise((resolve, reject) => {
    client.CheckConnection(checkConnectionRequest, metadataWithRequestingUserEmail(userEmail), (err, checkConnectionResponse) => {
      if (err) {
        handleGrpcError(reject, err)
      } else {
        resolve(checkConnectionResponse)
      }
    })
  })
}

const GrpcService = {
  checkConnection,
}

export default GrpcService
