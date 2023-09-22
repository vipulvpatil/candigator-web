"use client"

import Image from "next/image"
import ProductAnimationFullscreen from "@/components/landing/product_animation_fullscreen"
import SpinnerIcon from "@/icons/spinner"
import {useState} from "react"

const ProductAnimation = () => {
  const [showFullscreenAnimation, setShowFullscreenAnimation] = useState(false)
  const [showLoader, setShowLoader] = useState(true)

  return <>
    <div
      className="w-[43%] min-w-[583px] max-w-[600px] cursor-pointer"
      onClick={() => setShowFullscreenAnimation(true)}
    >
      <div className="flex">
        <div className="
          w-[25px] h-[25px]
          border-t-2
          border-l-2
          rounded-tl-lg
          border-secondaryColor
        "/>
        <div className="flex-grow"/>
        <div className="
          w-[25px] h-[25px]
          border-t-2
          border-r-2
          rounded-tr-lg
          border-secondaryColor
        "/>
      </div>
      <div className="flex justify-center">
        <div className="w-[25px]"/>
        <div className="w-full h-[300px] relative">
          <Image
            src="/product_demo.gif"
            alt="Product image"
            fill
            sizes="33vw"
            onLoadingComplete={() => setShowLoader(false)}
            placeholder="blur"
            blurDataURL={"data:image/jpeg;base64,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"}
          ></Image>
          {showLoader && <div className="h-full flex items-center justify-center">
            <div className="w-8 h-8 animate-spin text-primaryColor">
              <SpinnerIcon spinnerColor="#A30000"/>
            </div>
          </div>}
        </div>
        <div className="w-[25px]"/>
      </div>
      <div className="flex justify-center">
        <div className="
          w-[25px] h-[25px]
          border-b-2
          border-l-2
          rounded-bl-lg
          border-secondaryColor
        "/>
        <div className="flex-grow"/>
        <div className="
          w-[25px] h-[25px]
          border-b-2
          border-r-2
          rounded-br-lg
          border-secondaryColor
        "/>
      </div>
    </div>
    <ProductAnimationFullscreen
      show={showFullscreenAnimation}
      handleClick={() => setShowFullscreenAnimation(false)}
    />
  </>
}

export default ProductAnimation
