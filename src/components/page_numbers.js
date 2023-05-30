"use client"

const PageNumbers = ({pageCount, selectedPage, handlePageSelected}) => {
  const onPageSelected = (pageNumber) => () => {
    handlePageSelected(pageNumber)
  }

  if (pageCount <= 1) {
    return <div className="inline-flex rounded-2xl w-12 h-12"></div>
  }

  const numberDivs = [...Array(pageCount)].map((_v, i) => {return i+1}).map(pageNumber => {
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
    {numberDivs}
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
