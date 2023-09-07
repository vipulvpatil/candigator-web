import FilledButton from "./generic/filled_button"
import SaveIcon from "@/icons/save"

const SaveButton = ({handleClick, disabled}) => {
  return (
    <FilledButton
      additionalStyling = "ml-5"
      handleClick={handleClick}
      disabled={disabled}
    >
      <div className="inline-flex align-middle w-[28px] relative top-[-1px]">
        <SaveIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-1px] font-semibold">
        {"Save"}
      </div>
    </FilledButton>
  )
}
export default SaveButton
