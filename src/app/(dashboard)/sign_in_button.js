"use client"

import {signIn} from "next-auth/react"
import {usePathname} from "next/navigation"

const SignInButton = () => {
  const path = usePathname()
  return <>
    <button
      className="bg-secondaryColor hover:bg-secondaryDarkColor text-white text-[48px] font-semibold rounded pt-0 pb-2 px-10 drop-shadow-button"
      onClick={()=>{signIn("google", {callbackUrl: path})}}
    >
      {"Login with Google"}
    </button>
  </>
}

export default SignInButton
