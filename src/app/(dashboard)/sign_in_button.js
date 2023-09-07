"use client"

import FilledButton from "@/components/buttons/generic/filled_button"
import {signIn} from "next-auth/react"
import {usePathname} from "next/navigation"

const SignInButton = () => {
  const path = usePathname()
  return <>
    <FilledButton
      handleClick={()=>{signIn("google", {callbackUrl: path})}}
      additionalStyling="text-[24px]"
      customPadding="px-10"
    >
      {"Login"}
    </FilledButton>
  </>
}

export default SignInButton
