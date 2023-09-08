import PageHeader from "@/components/page_header"
import StatusBox from "@/components/status_box"

const Settings = () => {
  return <>
    <PageHeader title={"Settings"}/>
    <div className="m-[22px]">
      <div className="
        font-semibold text-black/70
        p-[22px] bg-white rounded-lg
      ">
        <StatusBox/>
      </div>
    </div>
  </>
}

export default Settings
