import Link from "next/link"

const MenuButton = ({title,  selected}) => {
  let displayClass = "text-black hover:text-bold hover:bg-subtle/20 cursor-pointer"

  if (selected) {
    displayClass = "text-white bg-bold"
  }

  return (
    <Link href={`/${title}`}>
      <label className={`block text-[24px] font-normal text-left ${displayClass}`}>
        {title}
      </label>
    </Link>
  )
}

export default MenuButton
