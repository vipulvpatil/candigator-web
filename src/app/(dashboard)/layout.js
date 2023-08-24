import Menu from "./menu"
import SignInButton from "./sign_in_button"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const DashboardLayout = async ({children}) => {
  const session = await getServerSession(authOptions)
  if (!session){
    return  <div className="font-quicksand">
      <SignInButton/>
    </div>
  }

  return (
    <main className="font-quicksand w-full min-w-[1150px] h-full flex flex-row">
      <Menu/>
      <div className="p-[45px] w-full shadow-main">
        {children}
      </div>
    </main>
  )
}

export default DashboardLayout
