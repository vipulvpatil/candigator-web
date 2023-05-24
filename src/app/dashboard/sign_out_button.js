"use client"
import {signOut} from "next-auth/react"

const SignOutButton = () => {
  return (
    <div>
      <button
        onClick={()=>{signOut({callbackUrl: "/"})}}
      >
        Sign out
      </button>
    </div>
  )
}

export default SignOutButton
