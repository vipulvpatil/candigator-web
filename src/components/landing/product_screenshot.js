import Image from "next/image"

const ProductScreenshot = () => {
  return (
    <div className="
      w-[43%]
    ">
      <div className="flex">
        <div className="flex-grow"/>
        <div className="
          w-[50px] h-[50px]
          border-t-2
          border-r-2
          rounded-tr-lg
          border-secondaryColor
        "/>
      </div>
      <div className="flex justify-center">
        <Image
          src="/product.png"
          alt="Product image"
          width={496} height={305}
          className="small-border-top"
        ></Image>
      </div>
      <div className="flex justify-center">
        <div className="
          w-[50px] h-[50px]
          border-b-2
          border-l-2
          rounded-bl-lg
          border-secondaryColor
        "/>
        <div className="flex-grow"/>
      </div>
    </div>
  )
}

export default ProductScreenshot
