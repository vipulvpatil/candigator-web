const FileUploadsToggleButton = ({handleClick, badge, selected}) => {
  let assignedClass = ""
  let displayText = ""
  if (selected) {
    assignedClass = "text-white bg-bold"
    displayText = "Hide unprocessed"
  } else {
    assignedClass = "text-black/50 bg-black/5 hover:text-bold hover:bg-subtle/20"
    displayText = "Show unprocessed"
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

  if (count === "0") {
    return <></>
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
      onClick={handleClick}
    >
      <>
        <div className="
          text-[16px] text-center
          bg-red-700 w-[24px] h-[24px]
          rounded-full
          relative top-[1px]
          ">
          <div className="align-middle text-white">{count}</div>
        </div>
        <div className="w-[183px]">
          {displayText}
        </div>
      </>
    </div>
  </>
}

export default FileUploadsToggleButton
