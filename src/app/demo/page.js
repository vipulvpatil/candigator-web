import ActionItem from "@/components/landing/action_item"
import Footer from "@/components/landing/footer"
import Header from "@/components/landing/header"

const Demo = () => {
  return (
    <main className="font-quicksand w-full h-full text-black bg-white">
      <Header/>
      <div className="
        bg-gradient-to-b from-subtleColor from-0%
        via-primaryColor via-80% to-primaryColor to-100%
        h-min
        flex flex-col items-center
      ">
        <div className="
          pt-3 pb-6 mb-6
          text-center text-primaryColor text-[44px] font-semibold
          w-fit
        ">
          <div className="pb-3">
            {"Demo"}
          </div>
          <iframe width="912" height="513"
            src="https://www.youtube.com/embed/uJ7Yg9cwjpk?autoplay=1"
            title="Prospect Demo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen allowFullScreen="allowFullScreen">
          </iframe>
        </div>
        <div className="pb-5">
          <ActionItem
            label={"Try app features for free. No credit card required."}
            buttonLink="/candidates?testMode=true"
            buttonLabel="Try now for free"
          />
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default Demo
