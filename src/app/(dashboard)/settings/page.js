import PageHeader from "@/components/page_header"
import StatusBox from "@/app/status_box"

const Settings = () => {
  return (
    <div className="min-h-[620px] bg-gray-200">
      <PageHeader title={"Settings"}>

      </PageHeader>
      <div className="m-[22px]">
        <div className="
          font-semibold text-black/70
          p-[22px] bg-white rounded-lg
        ">
          <StatusBox/>
        </div>
      </div>
    </div>
  )
}

export default Settings
