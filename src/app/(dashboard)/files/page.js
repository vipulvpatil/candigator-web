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
  // const unprocessedFileUploadsCount = fileUploads.filter((fileUpload) => {
  //   return fileUpload.processingStatus !== "COMPLETED"
  // }).length

  // const title = <>
  //   <>{fileUploads.length - unprocessedFileUploadsCount}{" files"}</>
  //   {unprocessedFileUploadsCount > 0 &&
  //   <div className="text-red-700/50 text-[24px] pl-1 relative top-[10px]">
  //     {"("}{unprocessedFileUploadsCount}{" unprocessed)"}
  //   </div>}
  // </>


  return (
    <div className="grid grid-cols-7 min-h-[620px] w-full">
      <FileList files={fileUploads}/>
    </div>
  )
}

export default Files
