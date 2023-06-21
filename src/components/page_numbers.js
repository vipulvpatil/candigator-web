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

  const setVisiblePagesWindow = (firstPage) => {
    if (selectedPage < firstPage) {
      handlePageSelected(firstPage)
    } else if (selectedPage > firstPage + MAX_VISIBLE_PAGE_COUNT - 1) {
      handlePageSelected(firstPage + MAX_VISIBLE_PAGE_COUNT - 1)
    }
    setFirstVisiblePage(firstPage)
  }

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
    {selectedPage < firstVisiblePage &&
      <PageNumber
        number={selectedPage}
        selected={true}
        handleClick={()=>{}}
      />
    }
    {pageCount > MAX_VISIBLE_PAGE_COUNT &&
      firstVisiblePage > 1 &&
      <>
        <PageNumber
          key={"left most"}
          number={"<<"}
          selected={false}
          handleClick={
            ()=>{
              if(firstVisiblePage > 1) {
                setVisiblePagesWindow(1)
              }
            }
          }
        />
        <PageNumber
          key={"left"}
          number={"<"}
          selected={false}
          handleClick={
            ()=>{
              if(firstVisiblePage > 1) {
                setVisiblePagesWindow(
                  Math.max(firstVisiblePage - MAX_VISIBLE_PAGE_COUNT, 1)
                )
              }
            }
          }
        />
      </>
    }
    {numberDivs}
    {pageCount > MAX_VISIBLE_PAGE_COUNT &&
      firstVisiblePage + MAX_VISIBLE_PAGE_COUNT < pageCount &&
      <>
        <PageNumber
          key={"right"}
          number={">"}
          selected={false}
          handleClick={
            ()=>{
              if(firstVisiblePage + MAX_VISIBLE_PAGE_COUNT < pageCount) {
                setVisiblePagesWindow(
                  Math.min(firstVisiblePage + MAX_VISIBLE_PAGE_COUNT, pageCount - MAX_VISIBLE_PAGE_COUNT + 1)
                )
              }
            }
          }
        />
        <PageNumber
          key={"right most"}
          number={">>"}
          selected={false}
          handleClick={
            ()=>{
              if(firstVisiblePage + MAX_VISIBLE_PAGE_COUNT < pageCount) {
                setVisiblePagesWindow(pageCount - MAX_VISIBLE_PAGE_COUNT + 1)
              }
            }
          }
        />
      </>
    }
    {selectedPage >= firstVisiblePage + MAX_VISIBLE_PAGE_COUNT &&
      <PageNumber
        number={selectedPage}
        selected={true}
        handleClick={()=>{}}
      />
    }
  </div>
}

const PageNumber = ({number, selected, handleClick}) => {
  let assignedClass = ""
  if (selected) {
    assignedClass = "text-white bg-bold"
  } else {
    assignedClass = "text-black/50 bg-black/5 hover:text-bold hover:bg-subtle/20 hover:border-[2px] hover:border-bold"
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
