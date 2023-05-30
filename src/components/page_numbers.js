"use client"

import {useState} from "react"

const MAX_VISIBLE_PAGE_COUNT = 5

const PageNumbers = ({pageCount, selectedPage, handlePageSelected}) => {
  const [firstVisiblePage, setFirstVisiblePage] = useState(1)
  const onPageSelected = (pageNumber) => () => {
    handlePageSelected(pageNumber)
  }

  if (pageCount <= 1) {
    return <div className="inline-flex rounded-2xl w-12 h-12"></div>
  }

  let visiblePageCount = pageCount > MAX_VISIBLE_PAGE_COUNT ? MAX_VISIBLE_PAGE_COUNT : pageCount

  const numberDivs = [...Array(visiblePageCount)].map((_v, i) => {return firstVisiblePage+i}).map(pageNumber => {
    return (
      <PageNumber
        key={pageNumber}
        number={pageNumber}
        selected={pageNumber === selectedPage}
        handleClick={onPageSelected(pageNumber)}
      />
    )
  })

  return <div className="pt-6" >
    {pageCount > MAX_VISIBLE_PAGE_COUNT &&
      <PageNumber
      key={"left"}
      number={"<"}
      selected={false}
      handleClick={
        ()=>{
          if(firstVisiblePage > 1) {
            setFirstVisiblePage(
              Math.max(firstVisiblePage - MAX_VISIBLE_PAGE_COUNT, 1)
            )
          }
        }
      }
    />
    }
    {numberDivs}
    {pageCount > MAX_VISIBLE_PAGE_COUNT &&
      <PageNumber
      key={"right"}
      number={">"}
      selected={false}
      handleClick={
        ()=>{
          if(firstVisiblePage + MAX_VISIBLE_PAGE_COUNT - 1 < pageCount) {
            setFirstVisiblePage(
              Math.min(firstVisiblePage + MAX_VISIBLE_PAGE_COUNT, pageCount - MAX_VISIBLE_PAGE_COUNT + 1)
            )
          }
        }
      }
    />
    }
  </div>
}

const PageNumber = ({number, selected, handleClick}) => {
  let assignedClass = ""
  if (selected) {
    assignedClass = "text-bold bg-subtle/20 border-[2px] border-bold"
  } else {
    assignedClass = "text-black/50 bg-black/5"
  }
  return <>
    <div
      className={`
        inline-flex rounded-2xl w-12 h-12 mr-3
        justify-center items-center
        font-semibold text-[24px]
        cursor-pointer
        ${assignedClass}
      `}
      onClick={handleClick}
    >
      {number}
    </div>
  </>
}

export default PageNumbers
