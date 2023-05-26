"use client"

import BillingIcon from "@/icons/billing"
import CandidatesIcon from "@/icons/candidates"
import MenuButton from "./menu_button"
import ProfileIcon from "@/icons/profile"
import SearchIcon from "@/icons/search"
import SettingsIcon from "@/icons/settings"
import {useSelectedLayoutSegment} from "next/navigation"

const Menu = () => {
  const segment = useSelectedLayoutSegment()
  return (
    <div className="border-solid border-subtle border-r-2 w-[165px] flex-none flex flex-col">
      <MenuButton title={"candidates"} selected={segment === "candidates"} icon={<CandidatesIcon/>}/>
      <MenuButton title={"search"} selected={segment === "search"} icon={<SearchIcon/>}/>
      <div className="flex-grow"/>
      <MenuButton title={"billing"} selected={segment === "billing"} icon={<BillingIcon/>}/>
      <MenuButton title={"settings"} selected={segment === "settings"} icon={<SettingsIcon/>}/>
      <MenuButton title={"profile"} selected={segment === "profile"} icon={<ProfileIcon/>}/>
    </div>
  )
}

export default Menu
