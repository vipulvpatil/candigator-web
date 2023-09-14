import ActionItem from "@/components/landing/action_item"
import Footer from "@/components/landing/footer"
import Header from "@/components/landing/header"
import Markdown from "./markdown"

const TermsOfService = () => {
  const effectiveDate = "14th September 2023"
  const companyName = "Vipul V. Patil"
  const companyAddress = "Mumbai"
  const companyJurisdiction = "India"
  const companyEmail = "assist.prospect@gmail.com"
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
          mt-3 pt-3 pb-6 mb-6 bg-white rounded-md px-5
          text-left text-black text-[16px] font-semibold
          w-[80%] max-w-[700px]
        ">
          <div className="pb-3 text-[44px] text-center">
            {"Terms of Service"}
          </div>
          <Markdown
            effectiveDate={effectiveDate}
            companyName={companyName}
            companyAddress={companyAddress}
            companyJurisdiction={companyJurisdiction}
            companyEmail={companyEmail}
          />
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


export default TermsOfService
