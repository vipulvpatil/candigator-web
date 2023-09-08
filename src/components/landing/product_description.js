import {TryNowForFreeButton} from "./buttons"

const ProductDescription = () => {
  return (
    <div className="
      w-[43%] min-w-[500px] max-w-[600px] h-[427px]
      bg-white rounded-lg leading-snug
      flex flex-col justify-evenly
    ">
      <div className="
        flex justify-center font-semibold text-[24px] text-center
        min-w-[380px] max-w-[380px] mx-auto
      ">
        {"No more looking through resumes. Quickly find the right candidate for the right job."}
      </div>
      <div className="
        font font-semibold text-[18px] mx-auto
        min-w-[360px] max-w-[420px]
      ">
        <div className="flex flex-col h-[145px] justify-between">
          <div className="flex items-center">
            <div className="
              bg-secondaryColor w-5 h-5 rounded-xl mr-4
            "></div>{"Process 100s of Resumes using Open AI."}
          </div>
          <div className="flex items-center">
            <div className="
              bg-secondaryColor w-5 h-5 rounded-xl mr-4
            "></div>{"Easily edit processed candidate data."}
          </div>
          <div className="flex items-center">
            <div className="
              bg-secondaryColor w-5 h-5 rounded-xl mr-4
            "></div>{"Advanced search on candidate data."}
          </div>
          <div className="flex items-center">
            <div className="
              bg-secondaryColor w-5 h-5 rounded-xl mr-4
            "></div>{"Bulk convert pdfs to searchable data."}
          </div>
        </div>
      </div>
      <div className="
        flex justify-center
      ">
        <TryNowForFreeButton/>
      </div>
    </div>
  )
}

export default ProductDescription
