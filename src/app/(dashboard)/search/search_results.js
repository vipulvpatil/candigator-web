"use client"

import CandidateDetails from "@/components/candidate/candidate_details"
import CandidateRow from "@/components/candidate/candidate_row"
import FilterModal from "./filter_modal"
import PageHeader from "@/components/page_header"
import PaginatedList from "@/components/paginated_list"
import SearchButton from "./search_button"
import {useState} from "react"

const SearchResults = ({candidates}) => {
  const [filteredCandidates,] = useState(candidates)
  const [selectedCandidateId, setSelectedCandidateId] = useState(null)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [searchFilters, setSearchFilters] = useState([])

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
    <PageHeader title={"Search"}>
      <SearchButton
        title={
          (searchFilters && searchFilters.length > 0)?
          `Edit Search (${searchFilters.length})`:
          "New Search"
        }
        handleClick={()=>setShowFilterModal(true)}
      />
    </PageHeader>
    <div className="flex flex-row m-[22px]">
      <div className="
        flex-grow grid grid-cols-7
        p-[22px] bg-white rounded-lg
      ">
        <PaginatedList
          itemList={filteredCandidates}
          itemRowFunc={candidateRowFunc}
          selectedItemId={selectedCandidateId}
          setSelectedItem={setSelectedCandidate}
          view={selectedCandidateId?"short":"long"}
        />
      </div>
      <CandidateDetails candidate={selectedCandidate} onClose={() => setSelectedCandidateId(null)}/>
    </div>
    <FilterModal
      setSearchFilters={setSearchFilters}
      searchFilters={searchFilters}
      show={showFilterModal}
      handleClose={() => setShowFilterModal(false)}
    />
  </>
}
export default SearchResults
