import GrpcService from "@/lib/grpc/service"
import Image from "next/image"
import LoggedInUser from "./loggedInUser"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const checkConnectionWithGrpc = async () => {
  const session = await getServerSession(authOptions)
  if(session && session.user && session.user.email) {
    const text = await GrpcService.checkConnection(session.user.email)
    console.log(text)
  }
}

async function Candidates() {
  await checkConnectionWithGrpc()
  return (
    <main className="font-oswald  w-full h-full text-black bg-gradient-to-b from-subtle to-white">
      <LoggedInUser />
      <div className="text-[64px] w-full text-center pb-6 text-bold">
        {"Candidate Tracker"}
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
        <div className="text-right text-primary w-[583px] h-[538px]">
          <div className="mt-[-9px] pb-10">{"Convert any PDF resume into searchable candidate information"}</div>
          <div className="pb-10">{"Manage upto 100 candidates using our basic plan"}</div>
          <div className="pb-10">{"Easily search through all your candidate data"}</div>
          <div>{"Try it for free"}</div>
          <button className="bg-bold hover:bg-dark text-white text-[56px] font-bold rounded pt-0 pb-2 px-10 mt-[79px]">
            {"Login with Dashboard"}
          </button>
        </div>
      </div>
      <div className="w-hero flex mx-auto">
        <div className="text-right text-[56px] w-[457px] mt-relax text-white pr-2">
          {"Relax"}
        </div>
        <div className="text-right text-[32px] w-[583px] mt-relaxSmall">
          {"as we help you find the right candidate in seconds"}
        </div>
      </div>
    </main>
  )
}

export default Candidates
