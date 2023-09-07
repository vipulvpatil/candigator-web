const {default: ProspectLogo} = require("@/icons/logo/prospect_logo")
const {DemoButton, LoginButton} = require("./buttons")

const Header = () => {
  return (
    <div className="
        text-[46px] w-full font-bold mx-auto
        flex flex-row
        leading-none py-2 px-4
      ">
        <div className="w-[30px] relative top-[-2px]">
          <ProspectLogo dotColor={"#A30000"} mainColor={"#006989"}/>
        </div>
        <div className="flex flex-row relative top-[-3px] text-[52px]">
          <div className="text-secondaryColor pl-5">
            {"P"}
          </div>
          <div className="text-primaryColor">
            {"rospect"}
          </div>
        </div>

        <div className="flex-grow"/>
        <DemoButton/>
        <LoginButton/>
    </div>
  )
}

export default Header
