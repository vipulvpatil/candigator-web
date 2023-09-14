import Image from "next/image"

const ProductAnimation = () => {
  return (
    <div className="
      w-[43%] min-w-[583px] max-w-[600px]
    ">
      <div className="flex">
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
          ></Image>
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
      </div>
    </div>
  )
}

export default ProductAnimation
