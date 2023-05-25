import MenuButton from "./menu_button"

const Menu = () => {
  return (
    <div className="border-solid border-subtle border-r-2 w-[165px] flex flex-col">
      <MenuButton title={"candidates"}/>
      <MenuButton title={"search"}/>
      <div className="flex-grow"/>
      <MenuButton title={"billing"}/>
      <MenuButton title={"settings"}/>
      <MenuButton title={"profile"}/>
    </div>
  )
}

export default Menu
