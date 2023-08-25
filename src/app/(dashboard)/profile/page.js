import {PageTitle} from "@/components/page_title"
import SignOutButton from "@/components/sign_out_button"

const Profile = () => {
  return (
    <div className="min-h-[620px] bg-gray-200">
      <div className="grid grid-cols-7 px-[22px] py-2 bg-white">
        <div className="col-span-3">
          <PageTitle title={"Profile"}/>
        </div>
        <div className="col-span-4 text-right"></div>
      </div>
      <SignOutButton />
    </div>
  )
}

export default Profile
