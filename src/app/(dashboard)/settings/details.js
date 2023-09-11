"use client"

import LoggedOut from "@/app/(dashboard)/logged_out"
import PageHeader from "@/components/page_header"
import SignOutButton from "./sign_out_button"
import TestModeButton from "@/components/buttons/test_mode_button"
import {TestModeContext} from "@/components/test_mode/test_mode_contexts"
import TestModeUnavailable from "@/app/(dashboard)/test_mode_unavailable"
import {useContext} from "react"

const Details = ({session}) => {
  const testMode = useContext(TestModeContext)

  if(!testMode.isEnabled && !session) {
    return <LoggedOut showTestButton={false}/>
  }

  if(testMode.isEnabled) {
    return <TestModeUnavailable/>
  }

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
        <SignOutButton/>
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

export default Details
