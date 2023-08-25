import AddCandidateIcon from "@/icons/add_candidate"

const AddCandidateButton = ({handleClick}) => {
  return (
    <button className="
      bg-secondaryColor hover:bg-secondaryDarkColor text-white text-[18px]
      fill-white rounded p-[6px] align-text-top"
      onClick={handleClick}
    >
      <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
        <AddCandidateIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
        {"Add Candidate"}
      </div>
    </button>
  )
}
export default AddCandidateButton
