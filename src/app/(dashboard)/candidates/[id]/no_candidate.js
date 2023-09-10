import PageHeader from "@/components/page_header"

const NoCandidateFound = () => {
  return <>
    <PageHeader title={"No candidate"}/>
    <div className="m-[22px]">
    <div className="
        font-semibold text-black/70
        p-[22px] bg-white rounded-lg
      ">
        {"Requested candidate not found"}
      </div>
    </div>
  </>
}

export default NoCandidateFound
