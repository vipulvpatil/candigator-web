import EditIcon from "@/icons/edit"
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
    statusTextColor = "text-red-700"
  } else {
    statusTextColor = null
  }

  if (showTopBorder) {
    topBorder = "border-t-[1px]"
  }

  return (
    <div
      className={`contents cursor-pointer ${hoverWrapper}`}
      onClick={() => {
        setSelectedFileUploadId(fileUpload.id)
      }}
    >
      <div className={`
        col-span-4 pr-5 py-1 pl-1
        border-b-[1px] border-subtleColor/30
        text-[28px] text-black/70
        ${topBorder}
      `}>
        <div className={`line-clamp-1 ${textFontStyle}`}>
          {fileUpload.name}
        </div>
      </div>
      <div className={`
        col-span-3
        py-1 pr-1
        border-b-[1px] border-subtleColor/30
        text-[24px] text-black/50 text-right
        ${topBorder}
      `}>
        {selected && <div className="px-2 inline">
          <Link href={`/files/${fileUpload.id}`}>
            <button
              className="
                w-[34px]
                fill-secondaryColor hover:fill-secondaryDarkColor"
            >
              <EditIcon/>
            </button>
          </Link>
        </div>}
        <div className={`inline line-clamp-1 relative top-[4px] ${statusTextColor} ${textFontStyle}`}>
          {fileUpload.processingStatus}
        </div>
      </div>
    </div>
  )
}

export default FileRow
