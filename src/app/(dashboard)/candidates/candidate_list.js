"use client"

import AddCandidateButton from "./add_candidate_button"
import AddCandidateModal from "./add_candidate_modal"
import CandidateDetails from "./candidate_details"
import CandidateRow from "./candidate_row"
import CandidatesIcon from "@/icons/candidates"
import PageTitleWithCount from "@/components/page_title_with_count"
import PaginatedList from "@/components/paginated_list"
import {useState} from "react"

const CandidateList = ({candidates}) => {
  const [showAddItemModal, setShowAddItemModal] = useState(false)

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

  return <>
    <div className="col-span-3">
      <PageTitleWithCount icon={<CandidatesIcon/>} title={`${candidates.length} candidates`}/>
    </div>
    <div className="col-span-4 text-right">
      <AddCandidateButton handleClick={()=>{setShowAddItemModal(true)}}/>
    </div>
    <PaginatedList
      itemList={candidates}
      itemRowFunc={candidateRowFunc}
      itemDetailsFunc={candidateDetailsFunc}
    />
    <AddCandidateModal show={showAddItemModal} handleClose={() => setShowAddItemModal(false)}/>
  </>

}
export default CandidateList
