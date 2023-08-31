import DeleteIcon from "@/icons/delete"

const DeleteButton = ({handleClick, disabled}) => {
  return (
    <button className="
      bg-secondaryColor hover:bg-secondaryDarkColor disabled:bg-gray-400
      text-white fill-white text-[18px]
      rounded p-[6px] align-text-top"
      onClick={handleClick}
      disabled={disabled}
    >
      <div className="inline-flex align-middle w-[28px] relative top-[-1px]">
        <DeleteIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-1px] font-semibold">
        {"Delete"}
      </div>
    </button>
  )
}
export default DeleteButton
