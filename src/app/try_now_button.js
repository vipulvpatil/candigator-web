"use client"
import {signIn} from "next-auth/react"

const TryNowButton = () => {
  return (
    <button
      className="
      bg-secondaryColor hover:bg-secondaryDarkColor
      text-white text-[18px] font-semibold
      rounded px-4 py-2"
      onClick={()=>{signIn("google", {callbackUrl: "/candidates"})}}
    >
      {"Try now"}
    </button>
  )
}


export default TryNowButton
