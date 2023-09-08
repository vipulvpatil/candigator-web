import PageHeader from "@/components/page_header"
import SignOutButton from "./sign_out_button"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Profile = async () => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <></>
  }
  return <>
    <PageHeader title={"Profile"}/>
    <div className="m-[22px]">
      <div className="
        font-semibold text-black/70
        p-[22px] bg-white rounded-lg
      ">
        <div className="pb-[11px]">
          {`You are currently logged in as: ${session.user.name}`}
        </div>
        <SignOutButton />
      </div>
    </div>
  </>
}

export default Profile
