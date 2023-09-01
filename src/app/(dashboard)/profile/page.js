import PageHeader from "@/components/page_header"
import SignOutButton from "@/components/sign_out_button"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Profile = async () => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <></>
  }
  return (
    <div className="min-h-[620px] bg-gray-200">
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
    </div>
  )
}

export default Profile
