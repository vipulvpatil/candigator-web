"use client"

import {useEffect, useState} from "react"
import FileRow from "./file_row"
import FileUploadsToggleButton from "./file_uploads_toggle_button"
import FilesIcon from "@/icons/files"
import PageTitleWithCount from "@/components/page_title_with_count"
import PaginatedList from "@/components/paginated_list"

const FileList = ({files}) => {
  const [fileUploadsToggleSelected, setFileUploadsToggleSelected] = useState(false)
  const [visibleFiles, setVisibleFiles] = useState(null)
  const [processedFiles, setProcessedFiles] = useState([])
  const [unprocessedFiles, setUnprocessedFiles] = useState([])

  const unprocessedFileUploadsCount = files.filter((fileUpload) => {
    return fileUpload.processingStatus !== "COMPLETED"
  }).length

  const title = <>
    <>{files.length - unprocessedFileUploadsCount}{" files"}</>
    {unprocessedFileUploadsCount > 0 &&
    <div className="text-red-700/50 text-[24px] pl-1 relative top-[10px]">
      {"("}{unprocessedFileUploadsCount}{" unprocessed)"}
    </div>}
  </>

  useEffect(() => {
    const processed = []
    const unprocessed = []

    if (files && files.length > 0){
      files.forEach((fileUpload) => {
        if(fileUpload.processingStatus === "COMPLETED") {
          processed.push(fileUpload)
        } else {
          unprocessed.push(fileUpload)
        }
      })
    }
    setUnprocessedFiles(unprocessed)
    setProcessedFiles(processed)
  }, [files])

  const fileRowFunc = (fileUploadId, fileUpload, selected, setSelectedFileUploadId, showTopBorder) => {
    return <FileRow
      key={fileUploadId}
      fileUpload={fileUpload}
      selected={selected}
      setSelectedFileUploadId={setSelectedFileUploadId}
      showTopBorder={showTopBorder}
    />
  }

  const unprocessedFileUploadsToggleFunc = (handleClick) => {
    return <FileUploadsToggleButton
      handleClick={() => {
        if(fileUploadsToggleSelected) {
          setFileUploadsToggleSelected(false)
          setVisibleFiles(processedFiles)
        } else {
          setFileUploadsToggleSelected(true)
          setVisibleFiles(unprocessedFiles)
        }
        handleClick()
      }}
      badge={unprocessedFiles.length}
      selected={fileUploadsToggleSelected}
    />
  }

  return <>
    <div className="col-span-3">
      <PageTitleWithCount icon={<FilesIcon/>} title={title}/>
    </div>
    <PaginatedList
      itemList={visibleFiles}
      itemRowFunc={fileRowFunc}
      rightButtonFunc={unprocessedFileUploadsToggleFunc}
    />
  </>
}

export default FileList
