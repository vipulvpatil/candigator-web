import FileUploadDetail from "./file_upload_detail"
import GrpcService from "@/lib/grpc/service"
import LoggedOut from "@/app/(dashboard)/logged_out"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

export const metadata = {
  title: "Prospect File",
}

const File = async ({params}) => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <LoggedOut/>
  }

  if (!params.id){
    return <NoFileFound/>
  }

  const response = await GrpcService.getFileUpload(session.user.email, params.id)
  const file = response.data
  if(!file || !file.id) {
    return <NoFileFound/>
  }
  return <FileUploadDetail fileUpload={file}/>
}

const NoFileFound = () => {
  return <>{"No file found"}</>
}

export default File
