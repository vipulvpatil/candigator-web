import {PageTitle} from "@/components/page_title"

const Search = () => {
  return (
    <div className="min-h-[620px] bg-gray-200">
      <div className="grid grid-cols-7 px-[22px] py-2 bg-white">
        <div className="col-span-3">
          <PageTitle title={"Search"}/>
        </div>
        <div className="col-span-4 text-right"></div>
      </div>
    </div>
  )
}

export default Search
