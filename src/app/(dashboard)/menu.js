"use client"

import DollarSignIcon from "@/icons/feather/dollar_sign"
import MenuButton from "./menu_button"
import SearchIcon from "@/icons/feather/search"
import SettingsIcon from "@/icons/feather/settings"
import UserIcon from "@/icons/feather/user"
import UsersIcon from "@/icons/feather/users"
import {useSelectedLayoutSegment} from "next/navigation"

const Menu = () => {
  const segment = useSelectedLayoutSegment()
  return (
    <div className="border-solid border-subtle border-r-2 w-[165px] flex flex-col">
      <MenuButton title={"candidates"} selected={segment === "candidates"} icon={<UsersIcon/>}/>
      <MenuButton title={"search"} selected={segment === "search"} icon={<SearchIcon/>}/>
      <div className="flex-grow"/>
      <MenuButton title={"billing"} selected={segment === "billing"} icon={<DollarSignIcon/>}/>
      <MenuButton title={"settings"} selected={segment === "settings"} icon={<SettingsIcon/>}/>
      <MenuButton title={"profile"} selected={segment === "profile"} icon={<UserIcon/>}/>
    </div>
  )
}

export default Menu
