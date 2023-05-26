import Footer from "./footer"
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
      <div className="h-full flex flex-row pt-[84px] mt-[-84px] pb-[28px] mb-[-28px]">
        <Menu />
        <div className="p-[45px] w-full">
          {children}
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default DashboardLayout
