import DemoButton from "./demo_button"
import Image from "next/image"
import LoginButton from "./login_button"
import ProspectLogo from "@/icons/logo/prospect_logo"
import TryNowButton from "./try_now_button"

const Home = () => {
  return (
    <main className="font-quicksand w-full h-full text-black bg-white">
      <div className="
        text-[46px] w-hero mb-10 font-bold mx-auto py-auto
        flex flex-row border-b-2 border-subtleColor
        leading-none py-2
      ">
        <div className="w-[30px] relative top-[-2px]">
          <ProspectLogo/>
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
        <TryNowButton/>
      </div>
      <div className="">
        </div>
      <div className="w-hero flex mx-auto">
        <Image
          src="/hero.jpg"
          alt="https://www.pexels.com/photo/photo-of-man-using-laptop-4047812/"
          width={457} height={538}
          style={{
            objectFit: "cover",
            overflow: "clip",
            height: "538px",
          }}
          className="max-w-none"
        ></Image>
        <div className="text-right text-[24px] w-[583px] h-[538px] font-semibold">
          <div className="mt-[-9px] pb-10">{"Convert resume into searchable candidate data"}</div>
          <div className="pb-10">{"Manage upto 100 candidates with a basic plan"}</div>
          <div className="pb-10">{"Easily search through your candidate data"}</div>
          <div>{"Try it for free. Limited time only"}</div>
          <LoginButton/>
        </div>
      </div>
      <div className="w-hero flex mx-auto">
        <div className="text-right text-[56px] w-[457px] mt-relax text-white pr-2 font-semibold">
          {"Relax"}
        </div>
        <div className="text-right text-[31px] w-[583px] mt-relaxSmall font-semibold">
          {"as we help you find the right candidate"}
        </div>
      </div>
    </main>
  )
}

export default Home
