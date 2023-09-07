import {DemoButton, LoginButton, TryNowForFreeButton} from "./buttons"
import Image from "next/image"
import ProspectLogo from "@/icons/logo/prospect_logo"

const Home = () => {
  return (
    <main className="font-quicksand w-full h-full text-black bg-white">
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
      <div className="
        bg-gradient-to-b from-subtleColor from-0%
        via-primaryColor via-30% to-primaryColor to-100%
        h-[1890px]
      ">
        <div className="w-full flex place-content-evenly py-12">
          <div className="w-[43%] bg-white rounded-lg leading-2">
            <div className="
              flex justify-center font-semibold text-[24px] text-center
              min-w-[380px] max-w-[380px] mx-auto mt-[30px]
            ">
              {"No more looking through resumes. Quickly find the right candidate for the right job."}
            </div>
            <div className="
              font font-semibold text-[18px] mx-auto my-8
              min-w-[420px] max-w-[420px]
            ">
              <div className="flex flex-col h-[145px] place-content-evenly">
                <div className="flex items-center">
                  <div className="
                    bg-secondaryColor w-5 h-5 rounded-xl mr-4
                  "></div>{"Process 100s of Resumes using Open AI."}
                </div>
                <div className="flex items-center">
                  <div className="
                    bg-secondaryColor w-5 h-5 rounded-xl mr-4
                  "></div>{"Easily edit processed candidate information."}
                </div>
                <div className="flex items-center">
                  <div className="
                    bg-secondaryColor w-5 h-5 rounded-xl mr-4
                  "></div>{"Advanced search on candidate date."}
                </div>
                <div className="flex items-center">
                  <div className="
                    bg-secondaryColor w-5 h-5 rounded-xl mr-4
                  "></div>{"Bulk convert pdfs to searchable data."}
                </div>
              </div>
            </div>
            <div className="
              flex justify-center
            ">
              <TryNowForFreeButton/>
            </div>
          </div>
          <div className="
            w-[43%]
          ">
            <div className="flex">
              <div className="flex-grow"/>
              <div className="
                w-[50px] h-[50px]
                border-t-2
                border-r-2
                rounded-tr-lg
                border-secondaryColor
              "/>
            </div>
            <div className="flex justify-center">
              <Image
                src="/product.png"
                alt="Product image"
                width={496} height={305}
                className="small-border-top"
              ></Image>
            </div>
            <div className="flex justify-center">
              <div className="
                w-[50px] h-[50px]
                border-b-2
                border-l-2
                rounded-bl-lg
                border-secondaryColor
              "/>
              <div className="flex-grow"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
