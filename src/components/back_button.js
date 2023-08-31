import BackIcon from "@/icons/back"

const BackButton = ({handleClick}) => {
  return (
    <button className="
      bg-white
      text-secondaryColor hover:text-secondaryDarkColor
      fill-secondaryColor hover:fill-secondaryDarkColor
      text-[18px] rounded
      border-2 hover:border-secondaryDarkColor border-secondaryColor
      p-[4px] align-text-top"
      onClick={handleClick}
    >
      <div className="inline-flex align-middle w-[28px]">
        <BackIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-1px] font-semibold">
        {"Back"}
      </div>
    </button>
  )
}
export default BackButton
