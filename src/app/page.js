import Header from "@/components/landing/header"
import ProductDescription from "@/components/landing/product_description"
import ProductScreenshot from "@/components/landing/product_screenshot"

const Home = () => {
  return (
    <main className="font-quicksand w-full h-full text-black bg-white">
      <Header/>
      <div className="
        bg-gradient-to-b from-subtleColor from-0%
        via-primaryColor via-30% to-primaryColor to-100%
        h-[1890px]
      ">
        <div className="
          w-full flex
          flex-col items-center
          xl:flex-row xl:justify-around
          gap-y-12 py-12
        ">
          <ProductDescription/>
          <ProductScreenshot/>
        </div>
        <div className="
          display mx-auto my-12
          text-center text-white text-[44px] font-semibold
          max-w-[1000px] w-[80%]
        ">
          {"Spend less time identifying the right candidate and more time talking to them"}
        </div>
      </div>
    </main>
  )
}

export default Home
