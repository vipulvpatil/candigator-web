"use client"
const {signIn} = require("next-auth/react")

const SignInButton = () => {
  return <>
    <button
      className="bg-secondaryColor hover:bg-secondaryDarkColor text-white text-[56px] font-semibold rounded pt-0 pb-2 px-10 mt-[79px]"
      onClick={()=>{signIn("google", {callbackUrl: "/candidates"})}}
    >
      {"Login with Google"}
    </button>
  </>
}

export default SignInButton
