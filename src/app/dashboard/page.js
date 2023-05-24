import Header from "./header"
import Menu from "./menu"
import SignInButton from "./sign_in_button"
import SignOutButton from "./sign_out_button"
import StatusBox from "@/app/status_box"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Dashboard = async () => {
  const session = await getServerSession(authOptions)
  if (!session){
    return (
      <div>
        <SignInButton/>
      </div>
    )
  }

  return (
    <main className="font-oswald w-full h-screen">
      <Header/>
      <div className="h-full flex flex-row pt-[84px] mt-[-84px]">
        <Menu />
        <div className="p-[45px]">
          {"Internal contents here."}
          <SignOutButton />
          <StatusBox/>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
