import Menu from "./menu"
import SignInButton from "./sign_in_button"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const DashboardLayout = async ({children}) => {
  const session = await getServerSession(authOptions)
  if (!session){
    return  <main className="font-quicksand w-full min-w-[1150px] h-full">
    <div className="
        flex flex-col items-center justify-center
      ">
        <div className="mt-10 mb-5 font-semibold text-black/70 text-[28px]">
          {"You need to login to access this page."}
        </div>
        <div>
          <SignInButton/>
        </div>
      </div>
    </main>
  }

  return (
    <main className="font-quicksand w-full min-w-[1150px] h-full flex flex-row">
      <Menu/>
      <div className="w-full bg-gray-200 min-h-[725px]">
        {children}
      </div>
    </main>
  )
}

export default DashboardLayout
