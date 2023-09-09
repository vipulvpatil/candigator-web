import PageHeader from "@/components/page_header"
import SignInButton from "./sign_in_button"
import TestModeButton from "@/components/buttons/test_mode_button"

const LoggedOut = ({showTestButton}) => {
  return <>
    <PageHeader title={"You are not Logged in"}/>
    <div className="m-[22px]">
      <div className="
        font-semibold text-black/70
        p-[22px] bg-white rounded-lg
      ">
        <div className="pb-[11px]">
          {"You need to login to access this page."}
        </div>
        <SignInButton/>
      </div>
      {showTestButton && <TestModeDiv/>}
    </div>
  </>
}

const TestModeDiv = () => {
  return <>
    <div className="h-[22px]"/>
    <div className="
      font-semibold text-black/70
      p-[22px] bg-white rounded-lg
    ">
      <div className="pb-[11px]">
        {"To try this without logging in, turn on Test Mode"}
      </div>
      <TestModeButton/>
    </div>
  </>
}

export default LoggedOut
