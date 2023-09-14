import {DemoButton, LoginButton} from "./buttons"
import Link from "next/link"
import ProspectLogo from "@/icons/logo/prospect_logo"

const Header = () => {
  return (
    <div className="
        text-[46px] w-full font-bold mx-auto
        flex flex-row
        leading-none py-2 px-4
      ">
        <div className="w-[30px] relative top-[-2px]">
          <Link href="/">
            <ProspectLogo dotColor={"#A30000"} mainColor={"#006989"}/>
          </Link>
        </div>
        <div className="flex flex-row relative top-[-2px] text-[52px]">
          <Link href="/">
            <div className="text-secondaryColor pl-3">
              {"P"}
            </div>
          </Link>
          <Link href="/">
            <div className="text-primaryColor">
              {"rospect"}
            </div>
          </Link>
        </div>

        <div className="flex-grow"/>
        <DemoButton/>
        <LoginButton/>
    </div>
  )
}

export default Header
