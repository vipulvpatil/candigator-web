"use client"

import LoggedOut from "@/app/(dashboard)/logged_out"
import PageHeader from "@/components/page_header"
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
    <PageHeader title={"Billing"}/>
    <div className="m-[22px]">
      <div className="
        font-semibold text-black/70
        p-[22px] bg-white rounded-lg
      ">
        <div>{"Thanks for your interest in a paid version of this application."}</div>
        <div>{"We are currently in Beta phase and do not have a paid version."}</div>
        <div>{"If you are interested in a paid version, please reach out to us at vipulvpatil@gmail.com"}</div>
      </div>
    </div>
  </>
}

export default Details
