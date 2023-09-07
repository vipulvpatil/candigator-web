import BackButton from "@/components/buttons/back_button"
import DeleteButton from "@/components/buttons/delete_button"
import {useRouter} from "next/navigation"
import {useState} from "react"

const FileUploadDeleteModal = ({show, fileUploadId, warningText, handleClose}) => {
  const [statusText, setStatusText] = useState("")
  const [isSaving, setSaving] = useState(false)
  const router = useRouter()

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
          {statusText !== "deleting succeeded" && <DeleteButton
            handleClick={async () => {
              setSaving(true)
              setStatusText("deleting ...")
              const result = await deleteFileUpload(fileUploadId)
              setStatusText(result)
              setSaving(false)
            }}
            disabled={isSaving}
          />}
          {statusText === "deleting succeeded" && <BackButton handleClick={() => router.back()}/>}
        </div>
        <div className="
          inline text-[18px] text-secondaryColor
          font-semibold align-middle
        ">
          {statusText}
        </div>
      </div>
    </>
  )
}

const deleteFileUpload = async (id) => {
  const resp = await fetch(`/api/file_uploads/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })

  const respJson = await resp.json()
  if (respJson.error) {
    console.log(respJson.error)
    return "deleting failed"
  }
  console.log(respJson.data)
  return "deleting succeeded"
}

export default FileUploadDeleteModal
