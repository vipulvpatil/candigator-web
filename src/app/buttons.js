"use client"

import FilledButton from "@/components/buttons/generic/filled_button"
import OutlineButton from "@/components/buttons/generic/outline_button"
import {signIn} from "next-auth/react"
import {useRouter} from "next/navigation"

export const DemoButton = () => {
  const router = useRouter()

  return (
    <OutlineButton
      handleClick={() => router.push("/demo")}
      customPadding="px-4 py-2.5"
      customMargin="mr-4 my-auto"
    >
      {"Demo"}
    </OutlineButton>
  )
}

export const LoginButton = () => {
  return (
    <FilledButton
      customPadding="px-4 py-3"
      customMargin="my-auto"
      handleClick={()=>{signIn("google", {callbackUrl: "/candidates?p=1"})}}
    >
      {"Login"}
    </FilledButton>
  )
}
