import PageHeader from "@/components/page_header"

const Search = () => {
  return (
    <div className="min-h-[620px] bg-gray-200">
      <PageHeader title={"Search"}/>
      <div className="m-[22px]">
        <div className="
          font-semibold text-black/70
          p-[22px] bg-white rounded-lg
        ">
          <div>{"Select a search criteria to see specific candidates."}</div>
        </div>
      </div>
    </div>
  )
}

export default Search
