import Header from "@/components/landing/header"
import ProcessStages from "@/components/landing/process_stages"
import ProductDetail from "@/components/landing/product_detail"

const Home = () => {
  return (
    <main className="font-quicksand w-full h-full text-black bg-white">
      <Header/>
      <div className="
        bg-gradient-to-b from-subtleColor from-0%
        via-primaryColor via-30% to-primaryColor to-100%
        h-min
      ">
        <ProductDetail/>
        <div className="
          display mx-auto my-12
          text-center text-white text-[44px] font-semibold
          max-w-[1000px] w-[80%]
        ">
          {"Spend less time identifying the right candidate and more time talking to them."}
        </div>
        <ProcessStages/>
        <div className="
          display mx-auto my-12
          text-center text-white text-[44px] font-semibold
          max-w-[1000px] w-[80%]
        ">
          {"AI has helped countless people become more efficient in their day to day lives. Join us in this revolution."}
        </div>

      </div>
    </main>
  )
}

export default Home
