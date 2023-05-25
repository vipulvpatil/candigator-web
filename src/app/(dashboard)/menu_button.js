import Link from "next/link"

const MenuButton = ({title,  selected, icon}) => {
  let displayClass = "text-black stroke-black hover:text-bold hover:bg-subtle/20 hover:stroke-bold cursor-pointer"

  if (selected) {
    displayClass = "text-white bg-bold fill-white stroke-white"
  }

  return (
    <Link href={`/${title}`} className={`block text-[24px] font-normal text-left ${displayClass}`}>
      <div className="p-2 inline">
        {icon}
      </div>
      <div className="inline">
        {title}
      </div>
    </Link>
  )
}

export default MenuButton
