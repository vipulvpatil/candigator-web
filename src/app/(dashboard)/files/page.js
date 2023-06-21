import FileList from "./file_list"
import FilesIcon from "@/icons/files"
import GrpcService from "@/lib/grpc/service"
import PageTitleWithCount from "@/components/page_title_with_count"
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
      <div className="col-span-3">
        <PageTitleWithCount icon={<FilesIcon/>} count={10} label={"files"}/>
      </div>
      <FileList files={fileUploads}/>
    </div>
  )
}

export default Files
