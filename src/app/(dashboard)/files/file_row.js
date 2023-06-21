const FileRow = ({fileUpload, selected, setSelectedFileUploadId, showTopBorder}) => {
  let textColor = null
  let bgColor = null
  let hoverWrapper = "wrapperForHover"
  let topBorder = ""
  if (selected) {
    textColor = "text-white"
    bgColor = "bg-bold"
    hoverWrapper = null
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
        col-span-2 pr-5 py-1 pl-1
        border-b-[1px] border-subtle/30
        text-[28px] text-black/70
        ${bgColor} ${topBorder}
      `}>
        <div className={`line-clamp-1 ${textColor}`}>
          {fileUpload.name}
        </div>
      </div>
      <div className={`
        col-span-2 pr-5 py-1
        border-b-[1px] border-subtle/30
        text-[24px] text-black/50
        ${bgColor} ${topBorder}
      `}>
        <div className={`line-clamp-1 relative top-[4px] ${textColor}`}>
          {fileUpload.status}
        </div>
      </div>
      <div className={`
        col-span-2 pr-5 py-1
        border-b-[1px] border-subtle/30
        text-[24px] text-black/50
        ${bgColor} ${topBorder}
      `}>
        <div className={`line-clamp-1 relative top-[4px] ${textColor}`}>
          {fileUpload.processingStatus}
        </div>
      </div>
      <div className={`
        col-span-1 py-1 pr-1
        border-b-[1px] border-subtle/30
        text-[24px] text-black/50 text-right
        ${bgColor} ${topBorder}
      `}>
        <div className={`line-clamp-1 relative top-[4px] ${textColor}`}>
          {fileUpload.error}
        </div>
      </div>
    </div>
  )
}

export default FileRow
