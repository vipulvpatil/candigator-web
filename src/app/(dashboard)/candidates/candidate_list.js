"use client"

import {useEffect, useState} from "react"
import {usePathname, useRouter, useSearchParams} from "next/navigation"
import AddCandidateButton from "./add_candidate_button"
import AddCandidateModal from "./add_candidate_modal"
import CandidateDetails from "@/components/candidate/candidate_details"
import CandidateRow from "@/components/candidate/candidate_row"
import PageHeader from "@/components/page_header"
import PaginatedList from "@/components/paginated_list"

const CandidateList = ({candidates}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const p = parseInt(searchParams.get("p")) || 1
  const cid = searchParams.get("cid")
  const [showAddCandidateModal, setShowAddCandidateModal] = useState(false)
  const [selectedCandidateId, setSelectedCandidateId] = useState(cid)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [selectedPage, setSelectedPage] = useState(p)
  const router = useRouter()

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

  useEffect(() => {
    let url = new URL(pathname, process.env.NEXT_PUBLIC_BASE_URL)
    url.searchParams.append("p", selectedPage)
    if(selectedCandidate) {
      url.searchParams.append("cid", selectedCandidate?.id)
    }
    router.push(url.toString(), undefined, {shallow: true})
  },[pathname, router, selectedCandidate, selectedPage])

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
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <CandidateDetails candidate={selectedCandidate} onClose={() => setSelectedCandidateId(null)}/>
    </div>
    <AddCandidateModal show={showAddCandidateModal} handleClose={() => setShowAddCandidateModal(false)}/>
  </>
}
export default CandidateList
