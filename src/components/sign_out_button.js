"use client"
import {signOut} from "next-auth/react"

const SignOutButton = () => {
  return (
    <div className="block">
      <button
        className="bg-secondaryColor hover:bg-secondaryDarkColor text-white text-[24px] font-semibold rounded pt-1 pb-2 px-10 drop-shadow-button"
        onClick={()=>{signOut({callbackUrl: "/"})}}
      >
        Sign out
      </button>
    </div>
  )
}

export default SignOutButton
