"use client"

import {useEffect, useState} from "react"
import FileRow from "./file_row"
import FileUploadsToggleButton from "./file_uploads_toggle_button"
import FilesIcon from "@/icons/files"
import PageTitleWithCount from "@/components/page_title_with_count"
import PaginatedList from "@/components/paginated_list"
import Title from "./title"

const FileList = ({files}) => {
  const [fileUploadsToggleSelected, setFileUploadsToggleSelected] = useState(false)
  const [visibleFiles, setVisibleFiles] = useState(null)
  const [processedFiles, setProcessedFiles] = useState([])
  const [unprocessedFiles, setUnprocessedFiles] = useState([])

  useEffect(() => {
    const processed = []
    const unprocessed = []

    if (Array.isArray(files)){
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

  useEffect(() => {
    if(!fileUploadsToggleSelected) {
      setVisibleFiles(processedFiles)
    } else {
      setVisibleFiles(unprocessedFiles)
    }
  }, [fileUploadsToggleSelected, processedFiles, unprocessedFiles])

  const fileRowFunc = (fileUploadId, fileUpload, selected, setSelectedFileUploadId, showTopBorder) => {
    return <FileRow
      key={fileUploadId}
      fileUpload={fileUpload}
      selected={selected}
      setSelectedFileUploadId={setSelectedFileUploadId}
      showTopBorder={showTopBorder}
    />
  }

  return <>
    <div className="col-span-3">
      <PageTitleWithCount icon={<FilesIcon/>} title={<Title files={files}/>}/>
    </div>
    <div className="col-span-4 text-right">
      <FileUploadsToggleButton
        handleClick={() => {
          if(fileUploadsToggleSelected) {
            setFileUploadsToggleSelected(false)
          } else {
            setFileUploadsToggleSelected(true)
          }
        }}
        badge={unprocessedFiles.length}
        selected={fileUploadsToggleSelected}
      />
    </div>
    <PaginatedList
      itemList={visibleFiles}
      itemRowFunc={fileRowFunc}
    />
  </>
}

export default FileList
