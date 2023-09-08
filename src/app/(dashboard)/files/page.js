import FileList from "./file_list"
import GrpcService from "@/lib/grpc/service"
import LoggedOut from "@/app/(dashboard)/logged_out"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Files = async () => {
  const session = await getServerSession(authOptions)

  if(!session) {
    return <LoggedOut/>
  }

  const response  = await GrpcService.getFileUploads(session.user.email)
  const fileUploads = response.data

  return <FileList files={fileUploads}/>
}

export default Files
