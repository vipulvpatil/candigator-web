import Header from "./header"
import Menu from "./menu"
import SignInButton from "./sign_in_button"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const DashboardLayout = async ({children}) => {
  const session = await getServerSession(authOptions)
  if (!session){
    return (
      <>
        <SignInButton/>
      </>
    )
  }

  return (
    <main className="font-oswald w-full h-screen">
      <Header/>
      <div className="h-full flex flex-row pt-[84px] mt-[-84px]">
        <Menu />
        {children}
      </div>
    </main>
  )
}

export default DashboardLayout
