import ProductAnimation from "./product_animation"
import ProductDescription from "./product_description"

const ProductDetail = () => {
  return (
    <div className="
      w-full flex
      flex-col items-center
      xl:flex-row xl:justify-around
      gap-y-12 py-12
    ">
      <ProductDescription/>
      <ProductAnimation/>
    </div>
  )
}

export default ProductDetail
