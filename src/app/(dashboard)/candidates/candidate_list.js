"use client"

import AddCandidateButton from "./add_candidate_button"
import AddCandidateModal from "./add_candidate_modal"
import CandidateDetails from "./candidate_details"
import CandidateRow from "./candidate_row"
import CandidatesIcon from "@/icons/candidates"
import PageTitleWithCount from "@/components/page_title_with_count"
import PaginatedList from "@/components/paginated_list"

const CandidateList = ({candidates}) => {
  const candidateRowFunc = (candidateId, candidate, selected, setSelectedItemId, showTopBorder) => {
    return <CandidateRow
      key={candidateId}
      candidate={candidate}
      selected={selected}
      setSelectedCandidateId={setSelectedItemId}
      showTopBorder={showTopBorder}
    />
  }

  const candidateDetailsFunc = (candidate, closeFunc) => {
    return <CandidateDetails candidate={candidate} onClose={closeFunc}/>
  }

  const addCandidateButtonFunc = (handleClick) => {
    return <AddCandidateButton handleClick={handleClick}/>
  }

  const addCandidateModalFunc = (show, closeFunc) => {
    return <AddCandidateModal show={show} handleClose={closeFunc}/>
  }

  return <>
    <div className="col-span-3">
      <PageTitleWithCount icon={<CandidatesIcon/>} title={`${candidates.length} candidates`}/>
    </div>
    <PaginatedList
      itemList={candidates}
      itemRowFunc={candidateRowFunc}
      itemDetailsFunc={candidateDetailsFunc}
      addItemModalFunc={addCandidateModalFunc}
      rightButtonFunc={addCandidateButtonFunc}
    />
  </>

}
export default CandidateList
