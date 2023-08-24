import AddCandidateIcon from "@/icons/add_candidate"

const SubmitButton = ({handleClick}) => {
  return (
    <button className="
      block
      bg-button hover:bg-buttonDark text-white text-[18px]
      fill-white rounded p-[6px] my-2
      drop-shadow-button"
      onClick={handleClick}
    >
      <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
        <AddCandidateIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
        {"Save"}
      </div>
    </button>
  )
}
export default SubmitButton
