import FileList from "./file_list"
import GrpcService from "@/lib/grpc/service"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Files = async () => {
  const session = await getServerSession(authOptions)

  if(!session) {
    return <></>
  }

  const response  = await GrpcService.getFileUploads(session.user.email)
  const fileUploads = response.data

  return (
    <div className="min-h-[620px] bg-gray-200">
      <FileList files={fileUploads}/>
    </div>
  )
}

export default Files
