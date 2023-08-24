import DemoButton from "./demo_button"
import Image from "next/image"
import LoginButton from "./login_button"
import TryNowButton from "./try_now_button"

const Home = () => {
  return (
    <main className="font-quicksand w-full h-full text-black bg-white">
      <div className="text-[46px] w-hero pb-16 font-bold mx-auto">
        <div className="inline text-secondaryColor float-left">
          {"P"}
        </div>
        <div className="inline text-primaryColor float-left">
          {"rospect"}
        </div>
        <div className="inline text-black float-right mt-[-5px]">
          <DemoButton/>
          <TryNowButton/>
        </div>
        <div className="clear-both border-b-2 border-subtleColor">
        </div>
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
