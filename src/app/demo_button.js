"use client"

import {useRouter} from "next/navigation"

const DemoButton = () => {
  const router = useRouter()

  return (
    <button
      className="
        bg-white hover:text-secondaryDarkColor
        text-secondaryColor text-[18px] font-semibold
        rounded px-4 mr-4 py-[10px] my-auto
        border-2 hover:border-secondaryDarkColor border-secondaryColor"
      onClick={() => router.push("/demo")}
    >
      {"Demo"}
    </button>
  )
}


export default DemoButton
