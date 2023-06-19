import Link from "next/link"

const MenuButton = ({title,  selected, icon}) => {
  let displayClass = "text-black fill-black font-normal hover:text-bold hover:bg-subtle/20 hover:fill-bold cursor-pointer"

  if (selected) {
    displayClass = "text-white bg-bold fill-white"
  }

  return (
    <Link href={`/${title}`} className={`block text-[24px] font-normal text-left px-2 ${displayClass}`}>
      <div className="inline-flex align-middle w-[34px] relative top-[-2px]">
        {icon}
      </div>
      <div className="pl-1 inline-flex align-middle relative top-[-3px]">
        {title}
      </div>
    </Link>
  )
}

export default MenuButton
