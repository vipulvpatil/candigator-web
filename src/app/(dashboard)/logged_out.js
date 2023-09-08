import PageHeader from "@/components/page_header"
import SignInButton from "./sign_in_button"

const LoggedOut = () => {
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
    </div>
  </>
}

export default LoggedOut
