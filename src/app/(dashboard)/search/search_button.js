"use client"

import FilledButton from "@/components/buttons/generic/filled_button"
import SearchIcon from "@/icons/search"

const SearchIconButton = ({title, handleClick}) => {
  return (
    <FilledButton
      handleClick={handleClick}
    >
    <div className="inline-flex align-middle w-[28px] relative top-[-1px]">
      <SearchIcon/>
      </div>
      <div className="pl-2 pr-1 inline-flex align-middle relative top-[-1px] font-semibold">
        {title}
      </div>
    </FilledButton>
  )
}
export default SearchIconButton
