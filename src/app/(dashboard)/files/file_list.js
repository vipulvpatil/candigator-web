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
  const [visibleFileUploads, setVisibleFileUploads] = useState(null)
  const [processedFileUploads, setProcessedFileUploads] = useState([])
  const [unprocessedFileUploads, setUnprocessedFileUploads] = useState([])
  const [selectedFileUploadId, setSelectedFileUploadId] = useState(null)
  const [, setSelectedFileUpload] = useState(null)

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
    setUnprocessedFileUploads(unprocessed)
    setProcessedFileUploads(processed)
  }, [files])

  useEffect(() => {
    if(!fileUploadsToggleSelected) {
      setVisibleFileUploads(processedFileUploads)
    } else {
      setVisibleFileUploads(unprocessedFileUploads)
    }
  }, [fileUploadsToggleSelected, processedFileUploads, unprocessedFileUploads])

  const fileRowFunc = (fileUpload, showTopBorder) => {
    return <FileRow
      key={fileUpload.id}
      fileUpload={fileUpload}
      selected={selectedFileUploadId === fileUpload.id}
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
        badge={unprocessedFileUploads.length}
        selected={fileUploadsToggleSelected}
      />
    </div>
    <PaginatedList
      itemList={visibleFileUploads}
      itemRowFunc={fileRowFunc}
      selectedItemId={selectedFileUploadId}
      setSelectedItem={setSelectedFileUpload}
    />
  </>
}

export default FileList
