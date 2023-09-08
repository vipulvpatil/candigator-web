import Menu from "./menu"

const DashboardLayout = async ({children}) => {
  return (
    <main className="font-quicksand w-full min-w-[1150px] h-full flex flex-row">
      <Menu/>
      <div className="w-full bg-gray-200 min-h-[725px]">
        <div className="min-h-[620px] bg-gray-200">
          {children}
        </div>
      </div>
    </main>
  )
}

export default DashboardLayout
