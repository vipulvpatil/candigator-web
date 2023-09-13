"use client"

import LoggedOut from "@/app/(dashboard)/logged_out"
import PageHeader from "@/components/page_header"
import SignOutButton from "./sign_out_button"
import TestModeButton from "@/components/buttons/test_mode_button"
import {TestModeContext} from "@/components/test_mode/test_mode_contexts"
import TestModeUnavailable from "@/app/(dashboard)/test_mode_unavailable"
import {useContext} from "react"

const Details = ({session, userData}) => {
  const testMode = useContext(TestModeContext)

  if(!testMode.isEnabled && !session) {
    return <LoggedOut showTestButton={false}/>
  }

  if(testMode.isEnabled) {
    return <TestModeUnavailable/>
  }

  console.log(userData)

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
        {userData &&
          <>
            <div className="grid grid-cols-2 min-w-[500px] w-[50%]">
              <div className="border-subtleColor border-2 p-1">
                {"Currently used file count"}
              </div>
              <div className="border-subtleColor border-t-2 border-r-2 border-b-2 p-1">
                {"Total file count"}
              </div>
              <div className="border-subtleColor border-l-2 border-r-2 border-b-2 font-bold text-black/90 p-1">
                {userData.currentFileCount}
              </div>
              <div className="border-subtleColor border-r-2 border-b-2 font-bold text-black/90 p-1">
                {userData.fileCountLimit}
              </div>
            </div>
            <div className="block py-[11px]">
              {"You have "}
              <div className="inline font-bold">
                {userData.unprocessedFileCount}
              </div>
              {" unprocessed files."}
              {userData.unprocessedFileCount > 0 && <div className="text-errorColor">
                {"Some files may take a while to complete processing. Please be patient."}
              </div>}
            </div>
          </>
        }
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
