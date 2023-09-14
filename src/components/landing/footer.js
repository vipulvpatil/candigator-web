import Link from "next/link"

const Footer = () => {
  return (<>
    <div className="
      border-b-2 border-subtleColor
      bg-primaryColor h-7
    "/>
    <div className="
      text-white text-[20px] w-full font-semibold
      bg-primaryColor
      flex flex-row
      p-7
    ">
      <div className="">
        {"© 2023 Vipul V Patil. All Rights Reserved."}
      </div>
      <div className="flex-grow"/>
      <Link href="/terms_of_service">Terms of Service</Link>
      <div className="w-7"/>
      <Link href="/privacy_policy">Privacy Policy</Link>
    </div>
  </>)
}

export default Footer
