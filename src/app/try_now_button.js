"use client"
import FilledButton from "@/components/buttons/generic/filled_button"
import {signIn} from "next-auth/react"

const TryNowButton = () => {
  return (
    <FilledButton
      customPadding="px-4 py-[12px]"
      customMargin="my-auto"
      handleClick={()=>{signIn("google", {callbackUrl: "/candidates?p=1"})}}
    >
      {"Login"}
    </FilledButton>
  )
}


export default TryNowButton
