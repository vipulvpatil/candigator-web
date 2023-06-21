"use client"

import {useEffect, useState} from "react"
import FileRow from "./file_row"
import PaginatedList from "@/components/paginated_list"

const FileList = ({files}) => {

  // TODO: Remove this next piece of code and innstead use the files data to calculate the count
  const [unprocessedFileCount, setUnprocessedFileCount] = useState(0)

  useEffect(() => {
    const loadUnprocessedFileCount = async () => {
      const resp = await fetch("/api/unprocessed_file_uploads", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })

      const respJson = await resp.json()
      setUnprocessedFileCount(respJson.unprocessedFileCount)
    }
    loadUnprocessedFileCount()
  }, [])

  const fileRowFunc = (fileUploadId, fileUpload, selected, setSelectedFileUploadId, showTopBorder) => {
    return <FileRow
      key={fileUploadId}
      fileUpload={fileUpload}
      selected={selected}
      setSelectedFileUploadId={setSelectedFileUploadId}
      showTopBorder={showTopBorder}
    />
  }

  const addCandidateButtonFunc = (handleClick) => {
    return <Button handleClick={handleClick} badge={unprocessedFileCount}/>
  }

  return <PaginatedList
    itemList={files}
    itemRowFunc={fileRowFunc}
    rightButtonFunc={addCandidateButtonFunc}
  />
}

const Button = ({handleClick, badge}) => {
  const [selected, setSelected] = useState(false)
  let assignedClass = ""
  if (selected) {
    assignedClass = "text-white bg-bold"
  } else {
    assignedClass = "text-black/50 bg-black/5 hover:text-bold hover:bg-subtle/20"
  }

  let count = "0"

  if (badge) {
    if (badge > 9) {
      count = "9+"
    }
    else {
      count = ""+badge+""
    }
  }

  return <>
    <div
      className={`
        inline-flex rounded-2xl h-12 mr-3 px-2
        justify-center items-center
        font-semibold text-[24px]
        cursor-pointer
        ${assignedClass}
      `}
      onClick={() => {
        if(selected) {
          setSelected(false)
        } else {
          setSelected(true)
        }
        handleClick()
      }}
    >
      {count != "0" && <>
        <div className="
          align-middle text-[16px] text-center
          bg-red-700 w-[24px] h-[24px]
          rounded-full
          ">
          <div className="align-middle text-white">{count}</div>
        </div>
        <div className="pl-2">
          {"Show unprocessed files"}
        </div>
      </>}
    </div>
  </>
}

export default FileList
