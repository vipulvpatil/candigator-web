import {credentials, loadPackageDefinition} from "@grpc/grpc-js"
import {loadSync} from "@grpc/proto-loader"
import path from "path"
import {promisify} from "util"

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

const grpcServiceClient = () => {
  if (!global.grpcServiceClient || global.refreshGrpcClient) {
    global.refreshGrpcClient = false
    console.log("Creating new grpc client")
    const client = newGRPCClient()
    global.grpcServiceClient = {
      client: client,
      checkConnection: promisify(client.CheckConnection).bind(client),
      uploadFiles: promisify(client.UploadFiles).bind(client),
      completeFileUploads: promisify(client.CompleteFileUploads).bind(client),
      getUnprocessedFileUploadsCount: promisify(client.GetUnprocessedFileUploadsCount).bind(client),
      getFileUploads: promisify(client.GetFileUploads).bind(client)
    }
  }

  return global.grpcServiceClient
}

export {grpcServiceClient}
