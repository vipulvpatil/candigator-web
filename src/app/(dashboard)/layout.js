import Footer from "./footer"
import Header from "./header"
import Menu from "./menu"
import SignInButton from "./sign_in_button"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const DashboardLayout = async ({children}) => {
  const session = await getServerSession(authOptions)
  if (!session){
    return  <>
      <SignInButton/>
    </>
  }

  return (
    <main className="font-oswald w-full min-w-[1150px] min-h-fit h-screen">
      <Header/>
      <div className="min-h-fit flex flex-row">
        <Menu />
        <div className="p-[45px] w-full min-h-fit shadow-main">
          {children}
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default DashboardLayout
