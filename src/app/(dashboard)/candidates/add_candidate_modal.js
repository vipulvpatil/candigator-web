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
        "
      >
        This is where you upload files
      </div>
      <div className="col-span-1"></div>
    </>
  )
}

export default AddCandidateModal
