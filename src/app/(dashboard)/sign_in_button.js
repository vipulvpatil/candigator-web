"use client"

import FilledButton from "@/components/buttons/generic/filled_button"
import {TestModeDispatchContext} from "@/components/test_mode/test_mode_contexts"
import {logAnalyticsEvent} from "@/lib/analytics/events"
import {signIn} from "next-auth/react"
import {useContext} from "react"
import {usePathname} from "next/navigation"

const SignInButton = () => {
  const path = usePathname()
  const testModeDispatch = useContext(TestModeDispatchContext)
  return <>
    <FilledButton
      handleClick={()=>{
        testModeDispatch({type: "turnOff"})
        logAnalyticsEvent(window, "SignInAttemptEvent")
        signIn("google", {callbackUrl: path})
      }}
      additionalStyling="text-[24px]"
      customPadding="px-10 pb-2 pt-1"
    >
      {"Login"}
    </FilledButton>
  </>
}

export default SignInButton
