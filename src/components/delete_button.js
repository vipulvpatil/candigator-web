import DeleteIcon from "@/icons/delete"

const DeleteButton = ({handleClick}) => {
  return (
    <button className="
      bg-secondaryColor hover:bg-secondaryDarkColor
      text-white fill-white text-[18px]
      rounded p-[6px] align-text-top ml-5"
      onClick={handleClick}
    >
      <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
        <DeleteIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
        {"Delete"}
      </div>
    </button>
  )
}
export default DeleteButton
