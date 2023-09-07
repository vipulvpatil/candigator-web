import DeleteIcon from "@/icons/delete"
import FilledButton from "./generic/filled_button"

const DeleteButton = ({handleClick, disabled}) => {
  return (
    <FilledButton
      handleClick={handleClick}
      disabled={disabled}
    >
      <div className="inline-flex align-middle w-[28px] relative top-[-1px]">
        <DeleteIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-1px] font-semibold">
        {"Delete"}
      </div>
    </FilledButton>
  )
}
export default DeleteButton
