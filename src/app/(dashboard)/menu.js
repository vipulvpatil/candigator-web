"use client"

import MenuButton from "./menu_button"
import UsersIcon from "@/icons/feather/users"
import {useSelectedLayoutSegment} from "next/navigation"

const Menu = () => {
  const segment = useSelectedLayoutSegment()
  return (
    <div className="border-solid border-subtle border-r-2 w-[165px] flex flex-col">
      <MenuButton title={"candidates"} selected={segment === "candidates"} icon={<UsersIcon/>}/>
      <MenuButton title={"search"} selected={segment === "search"} icon={<UsersIcon/>}/>
      <div className="flex-grow"/>
      <MenuButton title={"billing"} selected={segment === "billing"} icon={<UsersIcon/>}/>
      <MenuButton title={"settings"} selected={segment === "settings"} icon={<UsersIcon/>}/>
      <MenuButton title={"profile"} selected={segment === "profile"} icon={<UsersIcon/>}/>
    </div>
  )
}

export default Menu
