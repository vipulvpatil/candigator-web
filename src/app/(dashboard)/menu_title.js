import Link from "next/link"
import ProspectLogo from "@/icons/logo/prospect_logo"

const MenuTitle = () => {
  return (
    <Link href="/">
      <div className="w-[88px] mx-auto mt-4">
        <ProspectLogo dotColor={"#A30000"} mainColor={"white"}/>
      </div>
      <div className="
        text-center text-white font-bold text-[32px]
        pt-1 pb-3 border-b-2 border-white
      ">
        {"Prospect"}
      </div>
    </Link>
  )
}

export default MenuTitle
