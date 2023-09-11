"use client"

import {useCallback, useContext, useEffect, useState} from "react"
import {usePathname, useRouter, useSearchParams} from "next/navigation"
import CandidateDetails from "@/components/candidate/candidate_details"
import CandidateRow from "@/components/candidate/candidate_row"
import FilterModal from "./filter_modal"
import LoggedOut from "../logged_out"
import PageHeader from "@/components/page_header"
import PaginatedList from "@/components/paginated_list"
import SearchButton from "./search_button"
import {TestModeContext} from "@/components/test_mode/test_mode_contexts"
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
  let testCandidates

  useEffect(() => {
    setFilteredCandidates(applyFilters(candidates || testCandidates, searchFilters))
  }, [candidates, testCandidates, searchFilters])

  const updatePageNumber = useCallback((url, pageNumber) => {
    url.searchParams.set("p", pageNumber)
    setSelectedPage(pageNumber)
    return url
  }, [])

  const updateSelectedCandidateId = useCallback((url, candidateId) => {
    if(candidateId) {
      url.searchParams.set("cid", candidateId)
    }
    setSelectedCandidateId(candidateId)
    return url
  }, [])

  const setPageNumberAndSelectedCandidate = (pageNumber, candidateId) => {
    let url = new URL(pathname, process.env.NEXT_PUBLIC_BASE_URL)
    url = updatePageNumber(url, pageNumber)
    url = updateSelectedCandidateId(url, candidateId)
    router.push(url.toString(), undefined, {shallow: true})
  }
  const candidateRowFunc = (candidate, showTopBorder) => {
    return <CandidateRow
      key={candidate.id}
      candidate={candidate}
      selected={selectedCandidateId === candidate.id}
      setSelectedCandidateId={(candidateId) => {
        setPageNumberAndSelectedCandidate(selectedPage, candidateId)
      }}
      showTopBorder={showTopBorder}
      view={selectedCandidateId?"short":"long"}
    />
  }

  if(!testMode.isEnabled && !loggedIn) {
    return <LoggedOut showTestButton={true}/>
  }

  if(testMode.isEnabled) {
    testCandidates = processCandidates(testMode.candidates)
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
          setSelectedPage={(pageNumber) => {
            setPageNumberAndSelectedCandidate(pageNumber, selectedCandidateId)
          }}
        />
      </div>
      <CandidateDetails candidate={selectedCandidate} onClose={() => {
        setPageNumberAndSelectedCandidate(selectedPage, null)
      }}/>
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
