"use client"
import Link from "next/link"

const DemoButton = () => {
  return (
     <Link href="/demo">
      <button
        className="
          bg-white hover:text-secondaryDarkColor
          text-secondaryColor text-[18px] font-semibold
          rounded px-4 py-[6px] mr-4
          border-2 hover:border-secondaryDarkColor border-secondaryColor"
      >
        {"Demo"}
      </button>
    </Link>
  )
}


export default DemoButton
