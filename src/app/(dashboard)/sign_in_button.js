"use client"

import FilledButton from "@/components/buttons/generic/filled_button"
import {signIn} from "next-auth/react"
import {usePathname} from "next/navigation"

const SignInButton = () => {
  const path = usePathname()
  return <>
    <FilledButton
      handleClick={()=>{signIn("google", {callbackUrl: path})}}
      additionalStyling="px-10 text-[24px]"
    >
      {"Login"}
    </FilledButton>
  </>
}

export default SignInButton
