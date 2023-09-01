import PageHeader from "@/components/page_header"
import SignOutButton from "@/components/sign_out_button"

const Profile = () => {
  return (
    <div className="min-h-[620px] bg-gray-200">
      <PageHeader title={"Profile"}>

      </PageHeader>
      <div className="m-[22px]">
        <div className="
          font-semibold text-black/70
          p-[22px] bg-white rounded-lg
        ">
          <SignOutButton />
        </div>
      </div>
    </div>
  )
}

export default Profile
