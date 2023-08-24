import Link from "next/link"

const MenuButton = ({title, selected, icon, badge}) => {
  // let displayClass = "text-black fill-black hover:text-bold hover:bg-subtleColor/20 hover:fill-bold cursor-pointer"
  let displayClass = "text-white fill-white hover:bg-subtleColor/20 cursor-pointer"

  if (selected) {
    // displayClass = "text-white bg-bold fill-white"
    displayClass = "text-bold bg-subtleColor fill-bold"
  }

  let count = "0"

  if (badge) {
    if (badge > 9) {
      count = "9+"
    }
    else {
      count = ""+badge+""
    }
  }

  return (
    <Link href={`/${title}`} className={`flex text-[24px] font-semibold text-left px-6 py-1 ${displayClass}`}>
      <div className="align-middle w-[34px] relative top-[-2px]">
        {icon}
      </div>
      <div className="pl-2 align-middle flex-grow">
        {title}
      </div>
      {count !== "0" && <div className="
        align-middle text-[18px] text-center
        bg-red-700 w-[30px] h-[30px]
        rounded-full
        relative top-[4px]
        ">
        <div className="align-middle relative top-[2px] text-white">{count}</div>
      </div>}
    </Link>
  )
}

export default MenuButton
