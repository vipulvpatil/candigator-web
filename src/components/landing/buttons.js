"use client"

import FilledButton from "@/components/buttons/generic/filled_button"
import Link from "next/link"
import OutlineButton from "@/components/buttons/generic/outline_button"
import {signIn} from "next-auth/react"

export const DemoButton = () => {
  return (
    <Link href="/demo" className="contents">
      <OutlineButton
        customPadding="px-4 py-2.5"
        customMargin="mr-4 my-auto"
      >
        {"Demo"}
      </OutlineButton>
    </Link>
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

export const TryNowForFreeButton = () => {
  return (
    <FilledButton
      customPadding="px-4 py-3"
      customMargin="my-auto"
      handleClick={()=>{signIn("google", {callbackUrl: "/candidates?p=1"})}}
    >
      {"Try now for free"}
    </FilledButton>
  )
}

export const BigActionButton = ({label, link}) => {
  return (
    <Link href={link}>
      <FilledButton
        additionalStyling="text-[24px]"
        customPadding="px-7 py-4"
        customMargin="my-auto"
        handleClick={()=>{signIn("google", {callbackUrl: ""})}}
      >
        {label}
      </FilledButton>
    </Link>
  )
}
