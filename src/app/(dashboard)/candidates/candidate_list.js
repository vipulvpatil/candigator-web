"use client"

import {useCallback, useContext, useState} from "react"
import {usePathname, useSearchParams} from "next/navigation"
import AddCandidateButton from "./add_candidate_button"
import AddCandidateModal from "./add_candidate_modal"
import CandidateDetails from "@/components/candidate/candidate_details"
import CandidateRow from "@/components/candidate/candidate_row"
import LoggedOut from "@/app/(dashboard)/logged_out"
import LoginCTAModal from "./login_cta_modal"
import PageHeader from "@/components/page_header"
import PaginatedList from "@/components/paginated_list"
import {TestModeContext} from "@/components/test_mode/test_mode_contexts"
import {processCandidates} from "@/lib/candidate-builder/candidate"

const CandidateList = ({candidates, loggedIn}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const p = parseInt(searchParams.get("p")) || 1
  const cid = searchParams.get("cid")
  const [showAddCandidateModal, setShowAddCandidateModal] = useState(candidates.length === 0)
  const [showLoginCTAModal, setShowLoginCTAModal] = useState(false)
  const [selectedCandidateId, setSelectedCandidateId] = useState(cid)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [selectedPage, setSelectedPage] = useState(p)
  const testMode = useContext(TestModeContext)

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
    updateSelectedCandidateId(url, candidateId)
    // TODO: Disabling this until shallow navigation is enabled in NextJS 13
    //router.push(url.toString(), undefined, {shallow: true})
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
    candidates = processCandidates(testMode.candidates)
  }

  return <>
    <PageHeader title={`${(candidates?.length)?candidates.length:"0"} Candidates`}>
      <AddCandidateButton handleClick={()=>{setShowAddCandidateModal(true)}}/>
    </PageHeader>
    <div className="
      flex flex-row flex-grow
      overflow-hidden m-[22px]
    ">
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
    <AddCandidateModal
      show={showAddCandidateModal}
      handleClose={() => setShowAddCandidateModal(false)}
      showTestModeModal={setShowLoginCTAModal}
    />
    <LoginCTAModal show={showLoginCTAModal} handleClose={() => setShowLoginCTAModal(false)}/>
  </>
}
export default CandidateList
