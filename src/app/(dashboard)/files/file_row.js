import EditIcon from "@/icons/edit"
import IconButton from "@/components/buttons/generic/icon_button"
import Link from "next/link"

const FileRow = ({fileUpload, selected, setSelectedFileUploadId, showTopBorder}) => {
  let textFontStyle = "font-normal"
  let statusTextColor = null
  let hoverWrapper = "wrapperForHover"
  let topBorder = ""
  if (selected) {
    textFontStyle = "font-semibold"
    hoverWrapper = null
  }

  if (fileUpload.processingStatus === "FAILED") {
    statusTextColor = "text-errorColor"
  } else {
    statusTextColor = null
  }

  if (showTopBorder) {
    topBorder = "border-t-2"
  }

  return (
    <div
      className={`contents cursor-pointer ${hoverWrapper}`}
      onClick={() => {
        setSelectedFileUploadId(fileUpload.id)
      }}
    >
      <div className={`
        col-span-5 pr-5 py-1 pl-1
        border-b-2 border-subtleColor
        text-[28px] text-black/70
        flex items-center
        ${topBorder}
      `}>
        <div className={`line-clamp-1 ${textFontStyle} inline`}>
          {fileUpload.name}
        </div>
        {selected && <div className="px-2 inline align-top">
          <Link href={`/files/${fileUpload.id}`}>
            <IconButton>
              <EditIcon/>
            </IconButton>
          </Link>
        </div>}
      </div>
      <div className={`
        col-span-2 py-1 pr-1
        border-b-2 border-subtleColor
        text-[24px] text-black/50 justify-end
        flex items-center
        ${topBorder}
      `}>
        <div className={`inline line-clamp-1 ${statusTextColor} ${textFontStyle}`}>
          {fileUpload.processingStatus}
        </div>
      </div>
    </div>
  )
}

export default FileRow
