import PageHeader from "@/components/page_header"

const Billing = () => {
  return (
    <div className="min-h-[620px] bg-gray-200">
      <PageHeader title={"Billing"}/>
      <div className="m-[22px]">
        <div className="
          font-semibold text-black/70
          p-[22px] bg-white rounded-lg
        ">
          <div>{"Thanks for your interest in a paid version of this application."}</div>
          <div>{"We are currently in Beta phase and do not have a paid version."}</div>
          <div>{"If you are interested in a paid version, please reach out to us at vipulvpatil@gmail.com"}</div>
        </div>
      </div>
    </div>
  )
}

export default Billing
