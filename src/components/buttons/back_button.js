import BackIcon from "@/icons/back"
import OutlineButton from "./generic/outline_button"

const BackButton = ({handleClick}) => {
  return (
    <OutlineButton
      handleClick={handleClick}
    >
      <div className="inline-flex align-middle w-[28px]">
        <BackIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-1px] font-semibold">
        {"Back"}
      </div>
    </OutlineButton>
  )
}
export default BackButton
