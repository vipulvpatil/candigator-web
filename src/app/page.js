import ActionItems from "@/components/landing/action_items"
import Footer from "@/components/landing/footer"
import Header from "@/components/landing/header"
import ProcessStages from "@/components/landing/process_stages"
import ProductDetail from "@/components/landing/product_detail"

const Home = () => {
  return (
    <main className="font-quicksand w-full h-full text-black bg-white">
      <Header/>
      <div className="
        bg-gradient-to-b from-subtleColor from-0%
        via-primaryColor via-35% to-primaryColor to-100%
        h-min
      ">
        <ProductDetail/>
        <div className="
          display mx-auto mt-6 mb-12
          text-center text-white text-[44px] font-semibold
          max-w-[1000px] w-[80%]
        ">
          {"Leveraging Chat GPT and Open AI to improve your candidate searches"}
        </div>
        <ProcessStages/>
        <div className="
          display mx-auto mt-16 mb-0
          text-center text-white text-[44px] font-semibold
          max-w-[1000px] w-[80%]
        ">
          {"Spend less time identifying the right candidate and more time talking to them."}
        </div>
        <ActionItems/>
      </div>
      <Footer/>
    </main>
  )
}

export default Home
