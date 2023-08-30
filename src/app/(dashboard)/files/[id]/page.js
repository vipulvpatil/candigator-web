import FileUploadDetail from "./file_upload_detail"
import GrpcService from "@/lib/grpc/service"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const File = async ({params}) => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <></>
  }

  if (!params.id){
    return <NoFileFound/>
  }

  const response = await GrpcService.getFileUpload(session.user.email, params.id)
  const file = response.data
  if(!file || !file.id) {
    return <NoFileFound/>
  }
  return (
    <div className="min-h-[620px] bg-gray-200">
      <FileUploadDetail fileUpload={file}/>
    </div>
  )
}

const NoFileFound = () => {
  return (
    <div className="min-h-[620px] bg-gray-200">
      {"No file found"}
    </div>
  )
}

export default File
