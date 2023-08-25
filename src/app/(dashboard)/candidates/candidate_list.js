"use client"

import AddCandidateButton from "./add_candidate_button"
import AddCandidateModal from "./add_candidate_modal"
import CandidateDetails from "./candidate_details"
import CandidateRow from "./candidate_row"
import PageHeader from "@/components/page_header"
import PaginatedList from "@/components/paginated_list"
import {useState} from "react"

const CandidateList = ({candidates}) => {
  const [showAddCandidateModal, setShowAddCandidateModal] = useState(false)
  const [selectedCandidateId, setSelectedCandidateId] = useState(null)
  const [selectedCandidate, setSelectedCandidate] = useState(null)

  const candidateRowFunc = (candidate, showTopBorder) => {
    return <CandidateRow
      key={candidate.id}
      candidate={candidate}
      selected={selectedCandidateId === candidate.id}
      setSelectedCandidateId={setSelectedCandidateId}
      showTopBorder={showTopBorder}
      view={selectedCandidateId?"short":"long"}
    />
  }

  return <>
    <PageHeader title={`${candidates.length} Candidates`}>
      <AddCandidateButton handleClick={()=>{setShowAddCandidateModal(true)}}/>
    </PageHeader>
    <div className="flex flex-row m-[22px]">
      <div className="
        flex-grow grid grid-cols-7
        p-[22px] bg-white rounded-lg
      ">
        <PaginatedList
          itemList={candidates}
          itemRowFunc={candidateRowFunc}
          selectedItemId={selectedCandidateId}
          setSelectedItem={setSelectedCandidate}
          view={selectedCandidateId?"short":"long"}
        />
      </div>
      <CandidateDetails candidate={selectedCandidate} onClose={() => setSelectedCandidateId(null)}/>
    </div>
    <AddCandidateModal show={showAddCandidateModal} handleClose={() => setShowAddCandidateModal(false)}/>
  </>
}
export default CandidateList
