import AddCandidateIcon from "@/icons/add_candidate"
import {useRef} from "react"

const AddCandidateModal = ({show, handleClose}) => {
  const inputRef = useRef()

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
            onChange={(e)=>{console.log(e.target.files)}}
          />
        </button>
        <div className="
          text-[18px] text-black/70
          overflow-scroll max-h-[200px] scroll-m-1 shadow-main
          px-3 py-1
        ">
          {[...Array(20)].map((_v, i) => {
            return <div className="border-b-[1px] border-subtle/30 w-full flex justify-between" key={i}>
              <div className="text-left">
                {`File ${i}`}
              </div>
              <div className="text-right">
                {"...processing"}
              </div>
            </div>
          })}
        </div>
      </div>
      <div className="col-span-1"></div>
    </>
  )
}

export default AddCandidateModal
