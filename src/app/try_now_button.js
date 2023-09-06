"use client"
import {signIn} from "next-auth/react"

const TryNowButton = () => {
  return (
    <button
      className="
      bg-secondaryColor hover:bg-secondaryDarkColor
      text-white text-[18px] font-semibold
      rounded px-4 py-[12px] my-auto"
      onClick={()=>{signIn("google", {callbackUrl: "/candidates?p=1"})}}
    >
      {"Try now"}
    </button>
  )
}


export default TryNowButton
