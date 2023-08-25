import FileList from "./file_list"
import GrpcService from "@/lib/grpc/service"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Files = async () => {
  const session = await getServerSession(authOptions)

  if(!session) {
    return <></>
  }

  const fileUploads = await GrpcService.getFileUploads(session.user.email)

  return (
    <div className="min-h-[620px] bg-gray-200">
      <div className="grid grid-cols-7 px-[22px] py-2 bg-white">
        <FileList files={fileUploads}/>
      </div>
    </div>
  )
}

export default Files
