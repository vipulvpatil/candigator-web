import {useRef, useState} from "react"
import AddCandidateIcon from "@/icons/add_candidate"

const AddCandidateModal = ({show, handleClose}) => {
  const inputRef = useRef()

  const [selectedFiles, setSelectedFiles] = useState(null)

  if (!show) {
    return <></>
  }
  return (
    <>
      <div
        className="
          col-span-7
          absolute top-[84px] left-[165px] h-[728px]
          background-blur-sm bg-black/30 right-0
        "
        onClick={handleClose}
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
        <button className="
          bg-bold hover:bg-dark text-white text-[18px]
          fill-white rounded p-[10px] m-6
          drop-shadow-button"
          onClick={()=>{inputRef.current.click()}}
        >
          <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
            <AddCandidateIcon/>
          </div>
          <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px]">
            {"Choose File/s"}
          </div>
          <input
            type="file"
            accept="application/pdf"
            hidden multiple
            ref={inputRef}
            onChange={(e)=>{
              setSelectedFiles(Array.from(e.target.files))
            }}
          />
        </button>
        <MultifileUpload files={selectedFiles}/>
      </div>
      <div className="col-span-1"></div>
    </>
  )
}

const MultifileUpload = ({files}) => {
  if(!files || files.length == 0) {
    return <></>
  }
  return <>
    <div className="
      text-[18px] text-black/70
      overflow-scroll max-h-[200px] scroll-m-1 shadow-main
      px-3 py-1
    ">
      {files.map((file) => {
        return <FileStatus key={file.name} filename={file.name}/>
      })}
    </div>
    <button className="
      bg-bold hover:bg-dark text-white text-[18px]
      fill-white rounded p-[10px] m-6
      drop-shadow-button"
      onClick={()=>{}}
    >
      <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
        <AddCandidateIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px]">
        {"Upload File/s"}
      </div>
    </button>
  </>
}

const FileStatus = ({filename}) => {
  return <div className="border-b-[1px] border-subtle/30 w-full flex justify-between">
    <div className="text-left">
      {filename}
    </div>
    <div className="text-right">
      {"Ready for Upload"}
    </div>
  </div>
}

export default AddCandidateModal
