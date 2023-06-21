import Link from "next/link"

const MenuButton = ({title,  selected, icon, badge}) => {
  let displayClass = "text-black fill-black font-normal hover:text-bold hover:bg-subtle/20 hover:fill-bold cursor-pointer"

  if (selected) {
    displayClass = "text-white bg-bold fill-white"
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
    <Link href={`/${title}`} className={`flex text-[24px] font-normal text-left px-2 py-1 ${displayClass}`}>
      <div className="align-middle w-[34px] relative top-[-2px]">
        {icon}
      </div>
      <div className="pl-1 align-middle flex-grow">
        {title}
      </div>
      {count != "0" && <div className="
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
