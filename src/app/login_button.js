"use client"
import {signIn, useSession} from "next-auth/react"
import Link from "next/link"

const LoginButton = () => {
  const session = useSession()

  let nextButton = null

  const loginButton = (
    <button
      className="bg-secondaryColor hover:bg-secondaryDarkColor text-white text-[48px] font-semibold rounded pt-0 pb-2 px-10 mt-[79px] drop-shadow-button"
      onClick={()=>{signIn("google", {callbackUrl: "/candidates"})}}
    >
      {"Login with Google"}
    </button>
  )

  const continueButton = (
     <Link href="/candidates">
      <button
        className="bg-secondaryColor hover:bg-secondaryDarkColor text-white text-[48px] font-semibold rounded pt-0 pb-2 px-10 mt-[79px] drop-shadow-button"
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
