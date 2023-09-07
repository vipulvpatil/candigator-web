"use client"

import OutlineButton from "@/components/buttons/generic/outline_button"
import {useRouter} from "next/navigation"

const DemoButton = () => {
  const router = useRouter()

  return (
    <OutlineButton
      handleClick={() => router.push("/demo")}
      additionalStyling="px-4 mr-4 py-[10px] my-auto"
    >
      {"Demo"}
    </OutlineButton>
  )
}


export default DemoButton
