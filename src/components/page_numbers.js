const PageNumbers = () => {
  const count = 5
  const selected = 2
  const numberDivs = [...Array(count)].map((v, i) => {return i+1}).map(pageNumber => {
    return <PageNumber key={pageNumber} number={pageNumber} selected={pageNumber === selected}/>
  })

  return <div className="py-6 last:mr-0 ">
    {numberDivs}
  </div>
}

const PageNumber = ({number, selected}) => {
  let assignedClass = ""
  if (selected) {
    assignedClass = "text-bold bg-subtle/20 border-[2px] border-bold"
  } else {
    assignedClass = "text-black/50 bg-black/5"
  }
  return <>
    <div className={`
      inline-flex rounded-2xl w-12 h-12 mr-3
      justify-center items-center
      font-semibold text-[24px]
      ${assignedClass}
    `}>
      {number}
    </div>
  </>
}

export default PageNumbers
