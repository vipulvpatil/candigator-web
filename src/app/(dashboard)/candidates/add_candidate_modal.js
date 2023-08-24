import {createCompletedFileUploadData, createFileUploadData, uploadFiles} from "./upload"
import {useRef, useState} from "react"
import AddCandidateIcon from "@/icons/add_candidate"
import FilesIcon from "@/icons/files"
import Link from "next/link"

const UploadStatus = Object.freeze({
	NotStarted: Symbol("NotStarted"),
	Started: Symbol("Started"),
	Success: Symbol("Success"),
	Failure: Symbol("Failure")
})

const statusIsAllowUpload = (uploadStatus) => {
  return uploadStatus === UploadStatus.NotStarted || uploadStatus === UploadStatus.Failure
}

const statusIsAllowFileSelectionReset = (uploadStatus) => {
  return uploadStatus === UploadStatus.Success || uploadStatus === UploadStatus.Failure
}

const AddCandidateModal = ({show, handleClose}) => {
  const inputRef = useRef()
  const [filesWithUploadData, setFilesWithUploadData] = useState(null)
  const [currentUploadStatus, setCurrentUploadStatus] = useState(UploadStatus.NotStarted)

  const closeModal = () => {
    if(statusIsAllowFileSelectionReset(currentUploadStatus)) {
      setCurrentUploadStatus(UploadStatus.NotStarted)
      setFilesWithUploadData(null)
    }
    handleClose()
  }

  const uploadMultipleFiles = async (files) => {
    setCurrentUploadStatus(UploadStatus.Started)
    setFilesWithUploadData(files)
    try{
      const fileUploadData = await createFileUploadData(files)
      setFilesWithUploadData(fileUploadData)
      const completedFileUploadData = await uploadFiles(fileUploadData)
      setFilesWithUploadData(completedFileUploadData)
      const finalFileUploadData = await createCompletedFileUploadData(completedFileUploadData)
      setFilesWithUploadData(finalFileUploadData)
      let finalStatus = UploadStatus.Failure
      finalFileUploadData.forEach(file => {
        console.log(file)
        if (file.status === "completedSuccess") {
          finalStatus = UploadStatus.Success
        }
      })
      setCurrentUploadStatus(finalStatus)
    } catch (err){
      console.log(err)
      setCurrentUploadStatus(UploadStatus.Failure)
    }
  }

  if (!show) {
    return <></>
  }

  let actionButton = <FileSelectionButton
    inputRef={inputRef}
    uploadStatus={currentUploadStatus}
    uploadMultipleFiles={uploadMultipleFiles}
  />
  if (currentUploadStatus === UploadStatus.Success) {
    actionButton = <GoToFilesButton/>
  }

  return (
    <>
      <div
        className="
          col-span-7
          absolute top-[84px] left-[165px] h-[728px]
          background-blur-sm bg-black/30 right-0
        "
        onClick={closeModal}
      />
      <div className="col-span-1"></div>
      <div
        className="
          absolute top-[84px] left-[450px] right-[450px]
          p-[22px] rounded-b-lg
          min-h-[200px]
          max-h-[500px]
        bg-white
          drop-shadow-modal col-span-5
          text-center
        "
      >
        <div className="text-[32px]">Add candidates</div>
        <div className="">Select one or more PDF files to upload</div>
        {actionButton}
        <MultifilesWithUploadData
          filesWithUploadData={filesWithUploadData}
        />
      </div>
      <div className="col-span-1"></div>
    </>
  )
}

const FileSelectionButton = ({inputRef, uploadStatus, uploadMultipleFiles}) => {
  return (<button className="
    bg-secondaryColor enabled:hover:bg-secondaryDarkColor text-white text-[18px]
    disabled:bg-disabled
    cursor-pointer disabled:cursor-not-allowed
    fill-white rounded p-[10px] m-6
    drop-shadow-button"
    onClick={()=>{inputRef.current.click()}}
    disabled={!statusIsAllowUpload(uploadStatus)}
  >
    <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
      <AddCandidateIcon/>
    </div>
    <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
      {"Choose File/s"}
    </div>
    <input
      type="file"
      accept="application/pdf"
      hidden multiple
      ref={inputRef}
      onChange={(e)=>{
        const files = Array.from(e.target.files).map(file => {
          return({
            file: file,
            name: file.name,
            status: "Ready for Upload",
            uploadData: null,
          })
        })
        uploadMultipleFiles(files)
      }}
    />
  </button>)
}

const GoToFilesButton = () => {
  return (
    <Link href={"/files"} >
      <button className="
        bg-secondaryColor enabled:hover:bg-secondaryDarkColor text-white text-[18px]
        cursor-pointer
        fill-white rounded p-[10px] m-6
        drop-shadow-button"
      >
        <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
          <FilesIcon/>
        </div>
        <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
          {"Go To Files"}
        </div>
      </button>
    </Link>
  )
}

const MultifilesWithUploadData = ({
  filesWithUploadData
}) => {
  if(!filesWithUploadData || filesWithUploadData.length == 0) {
    return <></>
  }
  return <>
    <div className="
      text-[18px] text-black/70
      overflow-scroll max-h-[200px] scroll-m-1 shadow-main
      px-3 py-1
    ">
      {filesWithUploadData.map((fileWithUploadData) => {
        return <FileStatus
          key={fileWithUploadData.name}
          fileWithUploadData={fileWithUploadData}
        />
      })}
    </div>
  </>
}

const FileStatus = ({fileWithUploadData}) => {
  return <div className="border-b-[1px] border-subtleColor/30 w-full flex justify-between">
    <div className="text-left">
      {fileWithUploadData.name}
    </div>
    <div className="text-right">
      {fileWithUploadData.displayMessage}
    </div>
  </div>
}

export default AddCandidateModal
