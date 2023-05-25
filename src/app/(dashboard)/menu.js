"use client"

import MenuButton from "./menu_button"
import {useSelectedLayoutSegment} from "next/navigation"

const Menu = () => {
  const segment = useSelectedLayoutSegment()
  console.log(segment)
  return (
    <div className="border-solid border-subtle border-r-2 w-[165px] flex flex-col">
      <MenuButton title={"candidates"} selected={segment === "candidates"}/>
      <MenuButton title={"search"} selected={segment === "search"}/>
      <div className="flex-grow"/>
      <MenuButton title={"billing"} selected={segment === "billing"}/>
      <MenuButton title={"settings"} selected={segment === "settings"}/>
      <MenuButton title={"profile"} selected={segment === "profile"}/>
    </div>
  )
}

export default Menu
