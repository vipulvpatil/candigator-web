"use client"
import FilledButton from "@/components/buttons/generic/filled_button"
import {signOut} from "next-auth/react"

const SignOutButton = () => {
  return (
    <div className="block">
      <FilledButton
        handleClick={()=>{signOut({callbackUrl: "/"})}}
        additionalStyling="px-10"
      >
        {"Sign out"}
      </FilledButton>
    </div>
  )
}

export default SignOutButton
