"use client"
import {signOut, useSession} from "next-auth/react"

const LoggedInUser = () => {
  useSession({
    required: true,
  })

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

export default LoggedInUser
