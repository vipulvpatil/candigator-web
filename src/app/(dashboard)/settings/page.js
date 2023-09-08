import LoggedOut from "@/app/(dashboard)/logged_out"
import PageHeader from "@/components/page_header"
import StatusBox from "@/components/status_box"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Settings = async () => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <LoggedOut/>
  }

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
