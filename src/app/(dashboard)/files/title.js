import ProcessingIcon from "@/icons/processing"

const Title = ({files}) => {
  if (!Array.isArray(files)) {
    return <>{"files"}</>
  }

  const unprocessedFileUploadsCount = files.filter((fileUpload) => {
    return fileUpload.processingStatus !== "COMPLETED"
  }).length

  const willBeProcessedFileUploadCount = files.filter((fileUpload) => {
    return fileUpload.processingStatus !== "FAILED" && fileUpload.processingStatus !== "COMPLETED"
  }).length

  return <>
    <>{files.length - unprocessedFileUploadsCount}{" files"}</>
    {unprocessedFileUploadsCount > 0 &&
    <div>
      <div className="inline-flex text-red-700/50 text-[24px] pl-1">
        {"("}{unprocessedFileUploadsCount}{" unprocessed)"}
      </div>
      {willBeProcessedFileUploadCount > 0 && <div className="
        inline-flex align-middle w-[28px] fill-red-700/50 ml-2 animate-spin
      ">
        <ProcessingIcon/>
      </div>}
    </div>}
  </>
}

export default Title
