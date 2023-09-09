import LoggedOut from "@/app/(dashboard)/logged_out"
import PageHeader from "@/components/page_header"
import SignOutButton from "./sign_out_button"
import TestModeButton from "./test_mode_button"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Settings = async () => {
  const session = await getServerSession(authOptions)
  if(session) {
    return <>
      <PageHeader title={"Settings"}/>
      <div className="m-[22px]">
        <div className="
          font-semibold text-black/70
          p-[22px] bg-white rounded-lg
        ">
          <div className="pb-[11px]">
            {`You are currently logged in as: ${session.user.name}`}
          </div>
          <SignOutButton />
        </div>
        <div className="h-[22px]"/>
        <div className="
          font-semibold text-black/70
          p-[22px] bg-white rounded-lg
        ">
          <div className="pb-[11px]">
            {"Turn on test mode to try some features"}
          </div>
          <TestModeButton/>
        </div>
      </div>
    </>
  }

  return <LoggedOut/>
}

export default Settings
