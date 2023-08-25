import {PageTitle} from "@/components/page_title"
import StatusBox from "@/app/status_box"

const Billing = () => {
  return (
    <div className="min-h-[620px] bg-gray-200">
      <div className="grid grid-cols-7 px-[22px] py-2 bg-white">
        <div className="col-span-3">
          <PageTitle title={"Billing"}/>
        </div>
        <div className="col-span-4 text-right"></div>
      </div>
      <StatusBox/>
    </div>
  )
}

export default Billing
