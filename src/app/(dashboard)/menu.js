"use client"

import {useEffect, useState} from "react"
import BillingIcon from "@/icons/billing"
import CandidatesIcon from "@/icons/candidates"
import FilesIcon from "@/icons/files"
import MenuButton from "./menu_button"
import MenuFooter from "./menu_footer"
import MenuTitle from "./menu_title"
import ProfileIcon from "@/icons/profile"
import SearchIcon from "@/icons/search"
import SettingsIcon from "@/icons/settings"
import {useSelectedLayoutSegment} from "next/navigation"

const Menu = () => {
  const segment = useSelectedLayoutSegment()
  const [unprocessedFileCount, setUnprocessedFileCount] = useState(0)

  useEffect(() => {
    const loadUnprocessedFileCount = async () => {
      const resp = await fetch("/api/unprocessed_file_uploads", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      const respJson = await resp.json()
      setUnprocessedFileCount(respJson.unprocessedFileCount)
    }
    loadUnprocessedFileCount()
  }, [segment])

  return (
    <div className="h-full min-h-[725px] bg-primaryColor
      flex-shrink-0 flex-grow-0 basis-[220px] flex flex-col
    ">
      <MenuTitle/>
      <MenuButton title={"candidates"} selected={segment === "candidates"} icon={<CandidatesIcon/>}/>
      <MenuButton title={"search"} selected={segment === "search"} icon={<SearchIcon/>}/>
      <MenuButton title={"files"} selected={segment === "files"} icon={<FilesIcon/>} badge={unprocessedFileCount}/>
      <MenuButton title={"billing"} selected={segment === "billing"} icon={<BillingIcon/>}/>
      <MenuButton title={"settings"} selected={segment === "settings"} icon={<SettingsIcon/>}/>
      <MenuButton title={"profile"} selected={segment === "profile"} icon={<ProfileIcon/>}/>
      <div className="flex-grow"/>
      <MenuFooter/>
    </div>
  )
}

export default Menu
