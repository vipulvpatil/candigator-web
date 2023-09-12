import FileList from "./file_list"
import GrpcService from "@/lib/grpc/service"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

export const metadata = {
  title: "Prospect Files",
}

const Files = async () => {
  const session = await getServerSession(authOptions)
  let fileUploads
  if(session) {
    const response  = await GrpcService.getFileUploads(session.user.email)
    fileUploads = response.data
  }

  return <FileList files={fileUploads} loggedIn={!!session}/>
}

export default Files
