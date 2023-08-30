import DeleteButton from "@/components/delete_button"

const FileUploadDeleteModal = ({show, warningText, handleClose}) => {
  const closeModal = () => {
    handleClose()
  }

  if (!show) {
    return <></>
  }

  return (
    <>
      <div
      className="
        absolute top-[65px] left-[220px]
        bottom-0 right-0
        background-blur-sm bg-black/30
      "
      onClick={closeModal}
      />
      <div
        className="
          absolute top-[65px] left-[220px]
          right-0
          mt-[100px] mb-auto
          ml-auto mr-auto w-[50%]
          py-[22px] px-8 rounded-lg
          min-h-[200px] max-h-[500px] min-w-[400px]
        bg-white
          drop-shadow-modal
          text-center
        "
      >
        <div className="text-[32px] font-semibold text-black/60">Are you sure?</div>
        <div className="text-[20px] font-semibold text-black/80 mt-2">
          <div>{"You are about to permanently delete an uploaded file."}</div>
          {warningText}
          <div>{"This action is irreversible. Are you sure?"}</div>
        </div>
        <div className="m-6">
          <DeleteButton/>
        </div>
      </div>
    </>
  )
}

export default FileUploadDeleteModal
