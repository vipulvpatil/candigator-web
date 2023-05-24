"use client"
import {signIn, useSession} from "next-auth/react"
import Link from "next/link"

const LoginButton = () => {
  const session = useSession()

  let nextButton = null

  const loginButton = (
    <button
      className="bg-bold hover:bg-dark text-white text-[56px] font-bold rounded pt-0 pb-2 px-10 mt-[79px]"
      onClick={()=>{signIn("google", {callbackUrl: "/dashboard"})}}
    >
      {"Login with Google"}
    </button>
  )

  const continueButton = (
     <Link href="/dashboard">
      <button
        className="bg-bold hover:bg-dark text-white text-[56px] font-bold rounded pt-0 pb-2 px-10 mt-[79px]"
      >
        {"Your Candidates"}
      </button>
    </Link>
  )

  if(session && session.data && session.data.user) {
    nextButton = continueButton
  } else {
    nextButton = loginButton
  }

  return nextButton
}

export default LoginButton
