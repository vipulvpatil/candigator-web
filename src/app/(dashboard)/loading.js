import PageHeader from "@/components/page_header"

const Loading = () => {
  return <>
    <PageHeader title={"Loading..."}/>
    <div className="m-[22px]">
      <div className="
        font-semibold text-black/70
        p-[22px] bg-white rounded-lg
      ">
        {"Please wait for the page to load"}
      </div>
    </div>
  </>
}

export default Loading
