import {PageTitle} from "./page_title"

const PageHeader = ({title, children}) => {
  return (
    <div className="grid grid-cols-7 px-[22px] content-center h-16 bg-white">
      <div className="col-span-3">
        <PageTitle title={title}/>
      </div>
      <div className="col-span-4 text-right">
        {children}
      </div>
    </div>
  )
}

export default PageHeader
