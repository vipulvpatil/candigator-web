"use client"

import {useContext, useEffect, useState} from "react"
import FileRow from "./file_row"
import FileUploadsToggleButton from "./file_uploads_toggle_button"
import LoggedOut from "@/app/(dashboard)/logged_out"
import PageHeader from "@/components/page_header"
import PaginatedList from "@/components/paginated_list"
import {TestModeContext} from "@/components/test_mode/test_mode_contexts"
import TestModeUnavailable from "@/app/(dashboard)/test_mode_unavailable"
import Title from "./title"

const FileList = ({files, loggedIn}) => {
  const [fileUploadsToggleSelected, setFileUploadsToggleSelected] = useState(false)
  const [visibleFileUploads, setVisibleFileUploads] = useState(null)
  const [processedFileUploads, setProcessedFileUploads] = useState([])
  const [unprocessedFileUploads, setUnprocessedFileUploads] = useState([])
  const [selectedFileUploadId, setSelectedFileUploadId] = useState(null)
  const [, setSelectedFileUpload] = useState(null)
  const [selectedPage, setSelectedPage] = useState(1)
  const testMode = useContext(TestModeContext)

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

  if(!testMode.isEnabled && !loggedIn) {
    return <LoggedOut showTestButton={false}/>
  }

  if(testMode.isEnabled) {
    return <TestModeUnavailable/>
  }

  return <>
    <PageHeader title={<Title files={files}/>}>
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
    </PageHeader>
    <div className="
      flex flex-row flex-grow
      overflow-hidden m-[22px]
    ">
      <div className="
        flex-grow grid grid-cols-7
        p-[22px] bg-white rounded-lg
      ">
        <PaginatedList
          itemList={visibleFileUploads}
          itemRowFunc={fileRowFunc}
          selectedItemId={selectedFileUploadId}
          setSelectedItem={setSelectedFileUpload}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </div>
  </>
}

export default FileList
