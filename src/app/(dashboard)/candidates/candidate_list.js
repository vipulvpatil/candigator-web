"use client"

import AddCandidateButton from "./add_candidate_button"
import AddCandidateModal from "./add_candidate_modal"
import CandidateDetails from "./candidate_details"
import CandidateRow from "./candidate_row"
import {PageTitle} from "@/components/page_title"
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
    <div className="grid grid-cols-7 px-[22px] py-2 bg-white">
      <div className="col-span-3">
        <PageTitle title={`${candidates.length} Candidates`}/>
      </div>
      <div className="col-span-4 text-right">
        <AddCandidateButton handleClick={()=>{setShowAddCandidateModal(true)}}/>
      </div>
    </div>
    <div className="flex flex-row m-[22px]">
      <div className={`
        flex-grow grid grid-cols-7
        p-[22px] bg-white rounded-lg
      `}>
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
