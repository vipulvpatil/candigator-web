"use client"

import {useContext, useEffect, useState} from "react"
import {usePathname, useRouter, useSearchParams} from "next/navigation"
import CandidateDetails from "@/components/candidate/candidate_details"
import CandidateRow from "@/components/candidate/candidate_row"
import FilterModal from "./filter_modal"
import LoggedOut from "../logged_out"
import PageHeader from "@/components/page_header"
import PaginatedList from "@/components/paginated_list"
import SearchButton from "./search_button"
import {TestModeContext} from "@/app/(dashboard)/test_mode_context"
import {applyFilters} from "@/lib/search/filter"
import {processCandidates} from "@/lib/candidate-builder/candidate"

const SearchResults = ({candidates, loggedIn}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const p = parseInt(searchParams.get("p")) || 1
  const cid = searchParams.get("cid")
  const [filteredCandidates, setFilteredCandidates] = useState(candidates)
  const [selectedCandidateId, setSelectedCandidateId] = useState(cid)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [searchFilters, setSearchFilters] = useState([])
  const [selectedPage, setSelectedPage] = useState(p)
  const router = useRouter()
  const testMode = useContext(TestModeContext)

  useEffect(() => {
    setFilteredCandidates(applyFilters(candidates, searchFilters))
  }, [candidates, searchFilters])

  useEffect(() => {
    let url = new URL(pathname, process.env.NEXT_PUBLIC_BASE_URL)
    url.searchParams.append("p", selectedPage)
    if(selectedCandidate) {
      url.searchParams.append("cid", selectedCandidate?.id)
    }
    router.push(url.toString(), undefined, {shallow: true})
  },[pathname, router, selectedCandidate, selectedPage])

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

  if(!testMode.status && !loggedIn) {
    return <LoggedOut showTestButton={true}/>
  }

  if(testMode.status) {
    candidates = processCandidates(testMode.candidates)
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
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
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
