import Link from "next/link"

const MenuButton = ({title,  selected, icon}) => {
  let displayClass = "text-black fill-black hover:text-bold hover:bg-subtle/20 hover:fill-bold cursor-pointer"

  if (selected) {
    displayClass = "text-white bg-bold fill-white"
  }

  return (
    <Link href={`/${title}`} className={`block text-[24px] font-normal text-left py-1 ${displayClass}`}>
      <div className="p-2 inline-flex align-middle w-[46px]">
        {icon}
      </div>
      <div className="inline-flex align-middle fixed">
        {title}
      </div>
    </Link>
  )
}

export default MenuButton
