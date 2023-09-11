import Link from "next/link"
import PageHeader from "@/components/page_header"
import SignInButton from "./sign_in_button"

const TestModeUnavailable = () => {
  return <>
    <PageHeader title={"You are in test mode"}/>
    <div className="m-[22px]">
      <div className="
        font-semibold text-black/70
        p-[22px] bg-white rounded-lg
      ">
        <div className="pb-[11px]">
          {"Only "}
          <Link href="/candidates">
            <div className="inline
              text-white bg-primaryColor hover:bg-primaryDarkColor
              rounded-md p-1
            ">
              {"candidates"}
            </div>
          </Link>
          {" and "}
          <Link href="/search">
            <div className="inline
              text-white bg-primaryColor hover:bg-primaryDarkColor
              rounded-md p-1
            ">
              {"search"}
            </div>
          </Link>
          {" is available in test mode."}
          <div className="block mt-4">{"Login to access this page."}</div>
        </div>
        <SignInButton/>
      </div>
    </div>
  </>
}

export default TestModeUnavailable
