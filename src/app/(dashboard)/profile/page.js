import PageHeader from "@/components/page_header"
import SignOutButton from "@/components/sign_out_button"

const Profile = () => {
  return (
    <div className="min-h-[620px] bg-gray-200">
      <PageHeader title={"Profile"}/>
      <SignOutButton />
    </div>
  )
}

export default Profile
