"use client"
import BackButton from "@/components/back_button"
import DeleteButton from "@/components/delete_button"
import PageHeader from "@/components/page_header"
import {useRouter} from "next/navigation"

const FileUploadDetail = ({fileUpload}) => {
  const router = useRouter()

  return <>
    <PageHeader title={"Uploaded File Data"}>
      <BackButton handleClick={() => router.back()}/>
      <DeleteButton handleClick={() => router.back()}/>
    </PageHeader>
    <div className="flex flex-row m-[22px]">
      <div className="
        flex-grow
        p-[22px] bg-white rounded-lg h-[637px] overflow-y-scroll
      ">
        <div>
          <div className="text-[16px] font-bold mb-0 text-black/60">
            File Name
          </div>
          <div className="text-[20px] font-semibold text-black/80">
            {fileUpload.name}
          </div>
        </div>
        <div className="h-4"/>
        <div>
          <div className="text-[16px] font-bold mb-0 text-black/60">
            Upload Status
          </div>
          <div className="text-[20px] font-semibold text-black/80">
            {fileUpload.status}
          </div>
        </div>
        <div className="h-4"/>
        <div>
          <div className="text-[16px] font-bold mb-0 text-black/60">
            Candidate Processing Status
          </div>
          <div className="text-[20px] font-semibold text-black/80">
            {fileUpload.processingStatus}
          </div>
        </div>
        <div className="h-4"/>
        {fileUpload.error && <div>
          <div className="text-[16px] font-bold mb-0 text-black/60">
          File processing error
          </div>
          <div className="text-[20px] font-semibold text-black/80">
            {fileUpload.error}
          </div>
        </div>}
        {fileUpload.processingStatus === "COMPLETED" &&
          <>
            <div className="text-errorColor font-semibold text-[16px]">
              {"This file was used to populate a candidate's data. "}
            </div>
            <div className="text-errorColor font-bold text-[16px]">
              {"Deleting this file is not recommended"}
            </div>
          </>
        }
      </div>
    </div>
  </>
}


export default FileUploadDetail
