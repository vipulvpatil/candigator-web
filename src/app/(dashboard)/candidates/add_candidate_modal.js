import {createCompletedFileUploadData, createFileUploadData, uploadFiles} from "./upload"
import {useContext, useRef, useState} from "react"
import AddCandidateIcon from "@/icons/add_candidate"
import FilesIcon from "@/icons/files"
import FilledButton from "@/components/buttons/generic/filled_button"
import Link from "next/link"
import OutlineButton from "@/components/buttons/generic/outline_button"
import SpinnerIcon from "@/icons/spinner"
import {TestModeContext} from "@/components/test_mode/test_mode_contexts"
import {logAnalyticsEvent} from "@/lib/analytics/events"

const UploadStatus = Object.freeze({
	NotStarted: Symbol("NotStarted"),
	Started: Symbol("Started"),
	Success: Symbol("Success"),
	Failure: Symbol("Failure")
})

const statusIsNotStarted = (uploadStatus) => {
  return uploadStatus === UploadStatus.NotStarted
}

const statusIsAllowUpload = (uploadStatus) => {
  return uploadStatus === UploadStatus.NotStarted || uploadStatus === UploadStatus.Failure
}

const statusIsAllowFileSelectionReset = (uploadStatus) => {
  return uploadStatus === UploadStatus.Success || uploadStatus === UploadStatus.Failure
}

const AddCandidateModal = ({show, handleClose, showTestModeModal}) => {
  const inputRef = useRef()
  const [filesWithUploadData, setFilesWithUploadData] = useState(null)
  const [currentUploadStatus, setCurrentUploadStatus] = useState(UploadStatus.NotStarted)
  const testMode = useContext(TestModeContext)

  const closeModal = () => {
    if(statusIsAllowFileSelectionReset(currentUploadStatus)) {
      setCurrentUploadStatus(UploadStatus.NotStarted)
      setFilesWithUploadData(null)
    }
    handleClose()
  }

  const uploadMultipleFiles = async (files) => {
    logAnalyticsEvent(window, "FileUploadAttemptEvent")
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
    testMode={testMode}
    showTestModeModal={showTestModeModal}
  />
  if (currentUploadStatus === UploadStatus.Success) {
    actionButton = <GoToFilesButton/>
  }

  return (
    <>
      <div
      className="
        absolute top-[65px] left-[220px]
        bottom-0 right-0
        background-blur-sm bg-black/30
      "
      onClick={closeModal}
      />
      <div
        className="
          absolute top-[65px] left-[220px]
          right-0
          mt-[100px] mb-auto
          ml-auto mr-auto w-[50%]
          p-[22px] rounded-lg
          min-h-[200px] max-h-[500px] min-w-[550px]
        bg-white
          drop-shadow-modal
          text-center
        "
      >
        <div className="text-[32px]">Add candidates</div>
        <div>Select one or more PDF files to upload OR add candidates manually</div>
        {actionButton}
        {currentUploadStatus === UploadStatus.Failure &&
          <div className="text-[20px] text-errorColor font-semibold mb-6">
            {"Something went wrong"}
          </div>
        }
        <MultifilesWithUploadData
          filesWithUploadData={filesWithUploadData}
        />
        {statusIsNotStarted(currentUploadStatus) && <>
          <div className="font-semibold">{"OR"}</div>
          <div className="flex justify-center"><AddManuallyButton/></div>
        </>}
      </div>
    </>
  )
}

const FileSelectionButton = ({inputRef, uploadStatus, uploadMultipleFiles, testMode, showTestModeModal}) => {
  return (
  <FilledButton
    handleClick={()=>{
      if(testMode.isEnabled){
        showTestModeModal(true)
      } else {
        inputRef.current.click()
      }
    }}
    disabled={!statusIsAllowUpload(uploadStatus)}
    additionalStyling="cursor-pointer disabled:cursor-not-allowed"
    customPadding="p-2.5"
    customMargin="m-6"
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
  </FilledButton>
  )
}

const AddManuallyButton = () => {
  return <Link href={"/candidates/new"}>
    <OutlineButton
      additionalStyling="cursor-pointer w-[169px]"
      customPadding="p-2.5"
      customMargin="mt-6 mb-4"
    >
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
        {"Add Manually"}
      </div>
    </OutlineButton>
  </Link>
}

const GoToFilesButton = () => {
  return (
    <Link href={"/files"} >
      <FilledButton
        additionalStyling="cursor-pointer"
        customPadding="p-2.5"
        customMargin="m-6"
      >
        <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
          <FilesIcon/>
        </div>
        <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
          {"Go To Files"}
        </div>
      </FilledButton>
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
    <div className="
      whitespace-nowrap
      h-[40px] w-full text-right
      flex items-center
    ">
      <div className="overflow-hidden max-w-[300px] text-left">{fileWithUploadData.name}</div>
      <div className="flex-grow"></div>
      <div className="overflow-hidden max-w-[150px] pr-2 pl-4">{fileWithUploadData.displayMessage}</div>
      <div className="w-8 h-8 animate-spin text-primaryColor">
        <SpinnerIcon spinnerColor="#A30000"/>
      </div>
    </div>
  </div>
}

export default AddCandidateModal
