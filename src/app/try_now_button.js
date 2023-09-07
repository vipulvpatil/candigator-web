"use client"
import FilledButton from "@/components/buttons/generic/filled_button"
import {signIn} from "next-auth/react"

const TryNowButton = () => {
  return (
    <FilledButton
      additionalStyling="px-4 py-[12px] my-auto"
      handleClick={()=>{signIn("google", {callbackUrl: "/candidates?p=1"})}}
    >
      {"Login"}
    </FilledButton>
  )
}


export default TryNowButton
