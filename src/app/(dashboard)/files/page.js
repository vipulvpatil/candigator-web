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
    <div className="grid grid-cols-7 min-h-[620px] w-full">
      <FileList files={fileUploads}/>
    </div>
  )
}

export default Files
