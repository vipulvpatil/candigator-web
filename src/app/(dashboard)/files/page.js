import FilesIcon from "@/icons/files"
import PageTitleWithCount from "@/components/page_title_with_count"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Files = async () => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <></>
  }

  return (
    <div className="grid grid-cols-7 min-h-[620px] w-full">
      <div className="col-span-2">
        <PageTitleWithCount icon={<FilesIcon/>} count={10} label={"files"}/>
      </div>
      <div className="col-span-3"></div>
      <FileUploadList files={[]}/>
    </div>
  )
}

const FileUploadList = () => {
  return <>
  </>
}

export default Files
