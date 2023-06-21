import PageTitle from "@/app/(dashboard)/page_title"
import SignOutButton from "@/components/sign_out_button"

const Profile = () => {
  return (
    <div className="min-h-[620px] w-full">
      <PageTitle title="Profile"/>
      <SignOutButton />
    </div>
  )
}

export default Profile
