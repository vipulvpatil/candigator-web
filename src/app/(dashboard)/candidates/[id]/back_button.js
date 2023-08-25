import BackIcon from "@/icons/back"

const BackButton = ({handleClick}) => {
  return (
    <button className="
      bg-secondaryColor hover:bg-secondaryDarkColor text-white text-[18px]
      fill-white rounded p-[6px] align-text-top"
      onClick={handleClick}
    >
      <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
        <BackIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
        {"Back"}
      </div>
    </button>
  )
}
export default BackButton
