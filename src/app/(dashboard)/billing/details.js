"use client"

import LoggedOut from "@/app/(dashboard)/logged_out"
import PageHeader from "@/components/page_header"
import {TestModeContext} from "@/components/test_mode/test_mode_contexts"
import TestModeUnavailable from "@/app/(dashboard)/test_mode_unavailable"
import {companyEmail} from "@/lib/company-info/info"
import {useContext} from "react"


const Details = ({session, userData}) => {
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
        p-[22px] bg-white rounded-lg leading-loose
        text-[18px]
      ">
        <div>{"Thank you for your interest in this application."}</div>
        <div>{"We are currently in Beta phase and do not have a paid version yet."}</div>
        <div>{"Please continue using this free version until a paid version becomes available."}</div>
        <div>
          {"The free version enables you to upload and manage "}
          <div className="text-primaryColor inline text-[20px]">{userData?.fileCountLimit || 100}</div>
          {" resumes in total."}
        </div>
        <div>
          {"For any questions, please reach out to us at "}
          <a href={`mailto:${companyEmail}`}>
            <div className="text-primaryColor inline text-[20px]">{companyEmail}</div>
          </a>
        </div>
      </div>
    </div>
  </>
}

export default Details
