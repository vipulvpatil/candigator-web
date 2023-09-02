"use client"

import SearchIcon from "@/icons/search"

const SearchIconButton = ({handleClick}) => {
  return (
    <button className="
      bg-secondaryColor hover:bg-secondaryDarkColor text-white text-[18px]
      fill-white rounded p-[6px] align-text-top"
      onClick={handleClick}
    >
      <div className="inline-flex align-middle w-[28px] relative top-[-1px]">
        <SearchIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-1px] font-semibold">
        {"Search"}
      </div>
    </button>
  )
}
export default SearchIconButton
