import ProductDescription from "./product_description"
import ProductScreenshot from "./product_screenshot"

const ProductDetail = () => {
  return (
    <div className="
      w-full flex
      flex-col items-center
      xl:flex-row xl:justify-around
      gap-y-12 py-12
    ">
      <ProductDescription/>
      <ProductScreenshot/>
    </div>
  )
}

export default ProductDetail
