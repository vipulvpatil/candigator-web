import LoggedOut from "@/app/(dashboard)/logged_out"
import PageHeader from "@/components/page_header"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Billing = async () => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <LoggedOut/>
  }

  return <>
    <PageHeader title={"Billing"}/>
    <div className="m-[22px]">
      <div className="
        font-semibold text-black/70
        p-[22px] bg-white rounded-lg
      ">
        <div>{"Thanks for your interest in a paid version of this application."}</div>
        <div>{"We are currently in Beta phase and do not have a paid version."}</div>
        <div>{"If you are interested in a paid version, please reach out to us at vipulvpatil@gmail.com"}</div>
      </div>
    </div>
  </>
}

export default Billing
