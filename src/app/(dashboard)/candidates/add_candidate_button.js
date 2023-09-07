import AddCandidateIcon from "@/icons/add_candidate"
import FilledButton from "@/components/buttons/generic/filled_button"

const AddCandidateButton = ({handleClick}) => {
  return (
    <FilledButton
      handleClick={handleClick}
    >
      <div className="inline-flex align-middle w-[28px] relative top-[-2px]">
        <AddCandidateIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
        {"Add Candidate"}
      </div>
    </FilledButton>
  )
}
export default AddCandidateButton
