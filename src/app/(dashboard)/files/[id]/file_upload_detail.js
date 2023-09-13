"use client"
import BackButton from "@/components/buttons/back_button"
import FileUploadDeleteModal from "./file_upload_delete_modal"
import PageHeader from "@/components/page_header"
import {useRouter} from "next/navigation"
import {useState} from "react"

const FileUploadDetail = ({fileUpload}) => {
  const router = useRouter()
  const [showFileUploadDeleteModal, setShowFileUploadDeleteModal] = useState(false)

  return <>
    <PageHeader title={"Uploaded File Data"}>
      <BackButton handleClick={() => router.back()}/>
      {/* <div className="inline-block w-5"/>
      <DeleteButton handleClick={() => setShowFileUploadDeleteModal(true)}/> */}
    </PageHeader>
    <div className="flex flex-row m-[22px] overflow-hidden">
      <div className="
        flex-grow
        p-[22px] bg-white rounded-lg h-full
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
            {/* <div className="text-errorColor font-bold text-[16px]">
              {"Deleting this file is not recommended"}
            </div> */}
          </>
        }
      </div>
    </div>
    <FileUploadDeleteModal
      show={showFileUploadDeleteModal}
      fileUploadId={fileUpload.id}
      warningText={
        <div className="text-errorColor">
          {"This file was used to populate a candidate's data."}
        </div>
      }
      handleClose={() => setShowFileUploadDeleteModal(false)}
    />
  </>
}


export default FileUploadDetail
