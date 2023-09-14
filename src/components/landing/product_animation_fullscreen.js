"use client"

import Image from "next/image"
import Link from "next/link"
import SubtleButton from "@/components/buttons/generic/subtle_button"

const ProductAnimationFullscreen = ({show, handleClick}) => {
  if (!show) {
    return <></>
  }
  return(
    <div
      className="
        fixed w-full h-full top-0 left-0 z-50
        background-blur-sm bg-black/90
        flex flex-col items-center justify-evenly
      "
      onClick={handleClick}
    >
      <div className="w-[80%] h-auto relative">
        <Image
          src="/product_demo.gif"
          alt="Product image"
          width={1920} height={1080}
          placeholder="blur"
          blurDataURL="/screenshot_blur.jpg"
        ></Image>
      </div>
      <div className="bg-white rounded">
        <Link href={"/demo"}>
          <SubtleButton
            handleClick={() => {}}
            additionalStyling={"w-fit"}
            customPadding="px-4 py-2"
          >
            {"Detailed Demo"}
          </SubtleButton>
        </Link>
      </div>
    </div>
  )
}

export default ProductAnimationFullscreen
