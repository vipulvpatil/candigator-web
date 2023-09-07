"use client"

import OutlineButton from "@/components/buttons/generic/outline_button"
import {useRouter} from "next/navigation"

const DemoButton = () => {
  const router = useRouter()

  return (
    <OutlineButton
      handleClick={() => router.push("/demo")}
      customPadding="px-4 py-2.5"
      customMargin="mr-4 my-auto"
    >
      {"Demo"}
    </OutlineButton>
  )
}


export default DemoButton
