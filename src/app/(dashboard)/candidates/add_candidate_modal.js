import AddCandidateIcon from "@/icons/add_candidate"

const AddCandidateModal = ({show, handleClose}) => {
  if (!show) {
    return <></>
  }
  return (
    <>
      <div
        className="
          col-span-7
          absolute top-[84px] left-[165px] w-full h-[728px]
          background-blur-sm bg-black/30
        "
        onClick={handleClose}
      />
      <div className="col-span-1"></div>
      <div
        className="
          absolute top-[84px] left-96 right-96
          p-[22px] rounded-b-lg
          min-h-[500px]
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
          onClick={()=>{}}
        >
          <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
            <AddCandidateIcon/>
          </div>
          <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px]">
            {"Choose File"}
          </div>
        </button>
      </div>
      <div className="col-span-1"></div>
    </>
  )
}

export default AddCandidateModal
