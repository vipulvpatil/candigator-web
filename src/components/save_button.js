import SaveIcon from "@/icons/save"

const SaveButton = ({handleClick, disabled}) => {
  return (
    <button className="
      bg-secondaryColor hover:bg-secondaryDarkColor disabled:bg-gray-400
      text-white fill-white text-[18px]
      rounded p-[6px] align-text-top ml-5"
      onClick={handleClick}
      disabled={disabled}
    >
      <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
        <SaveIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
        {"Save"}
      </div>
    </button>
  )
}
export default SaveButton
