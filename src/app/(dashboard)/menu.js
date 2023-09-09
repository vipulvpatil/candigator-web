"use client"

import {TestModeContext, TestModeDispatchContext} from "./test_mode_context"
import {useContext, useEffect, useState} from "react"
import BillingIcon from "@/icons/billing"
import CandidatesIcon from "@/icons/candidates"
import FilesIcon from "@/icons/files"
import MenuButton from "./menu_button"
import MenuFooter from "./menu_footer"
import MenuTitle from "./menu_title"
import ProfileIcon from "@/icons/profile"
import SearchIcon from "@/icons/search"
import SubtleButton from "@/components/buttons/generic/subtle_button"
import {useSelectedLayoutSegment} from "next/navigation"

const Menu = () => {
  const segment = useSelectedLayoutSegment()
  const [unprocessedFileCount, setUnprocessedFileCount] = useState(0)
  const testMode = useContext(TestModeContext)
  const testModeDispatch = useContext(TestModeDispatchContext)

  useEffect(() => {
    const loadUnprocessedFileCount = async () => {
      const resp = await fetch("/api/unprocessed_file_uploads", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      const respJson = await resp.json()
      setUnprocessedFileCount(respJson.data)
    }
    loadUnprocessedFileCount()
  }, [segment])

  return (
    <div className="h-full min-h-[725px] bg-primaryColor
      flex-shrink-0 flex-grow-0 basis-[220px] flex flex-col
    ">
      <MenuTitle/>
      <MenuButton title={"candidates"} queryParamsArray={["p", 1]} selected={segment === "candidates"} icon={<CandidatesIcon/>}/>
      <MenuButton title={"search"} queryParamsArray={["p", 1]} selected={segment === "search"} icon={<SearchIcon/>}/>
      <MenuButton title={"files"} selected={segment === "files"} icon={<FilesIcon/>} badge={unprocessedFileCount}/>
      <MenuButton title={"billing"} selected={segment === "billing"} icon={<BillingIcon/>}/>
      {/*
      Removing Settings button for now as Settings page is currently empty
      <MenuButton title={"settings"} selected={segment === "settings"} icon={<SettingsIcon/>}/>
      */}
      <MenuButton title={"profile"} selected={segment === "profile"} icon={<ProfileIcon/>}/>
      <div className="flex-grow"/>
      {testMode.status && <div className={`
        font-semibold text-[24px]
        bg-red-500 text-white
        text-center
      `}>
        <div className="pb-1 pt-1">
          {`Test Mode is ${testMode.status?"on":"off"}`}
        </div>
        <SubtleButton
          handleClick={() => {
            testModeDispatch({type:"toggle"})
          }}
          customMargin="mt-1 mb-3"
        >
          {"Turn off"}
        </SubtleButton>
      </div>}
      <MenuFooter/>
    </div>
  )
}

export default Menu
