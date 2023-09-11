"use client"

import {TestModeContext, TestModeDispatchContext} from "@/components/test_mode/test_mode_contexts"
import {useContext, useEffect, useState} from "react"
import BillingIcon from "@/icons/billing"
import CandidatesIcon from "@/icons/candidates"
import FilesIcon from "@/icons/files"
import MenuButton from "./menu_button"
import MenuFooter from "./menu_footer"
import MenuTitle from "./menu_title"
import SearchIcon from "@/icons/search"
import SettingsIcon from "@/icons/settings"
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
    if(testMode.isEnabled){
      setUnprocessedFileCount(0)
    } else {
      loadUnprocessedFileCount()
    }
  }, [testMode, segment])

  return (
    <div className="h-full min-h-[725px] bg-primaryColor
      flex-shrink-0 flex-grow-0 basis-[220px] flex flex-col
    ">
      <MenuTitle/>
      <MenuButton title={"candidates"} queryParamsArray={["p", 1]} selected={segment === "candidates"} icon={<CandidatesIcon/>}/>
      <MenuButton title={"search"} queryParamsArray={["p", 1]} selected={segment === "search"} icon={<SearchIcon/>}/>
      <MenuButton title={"files"} selected={segment === "files"} icon={<FilesIcon/>} badge={unprocessedFileCount}/>
      <MenuButton title={"billing"} selected={segment === "billing"} icon={<BillingIcon/>}/>
      <MenuButton title={"settings"} selected={segment === "settings"} icon={<SettingsIcon/>}/>
      <div className="flex-grow"/>
      {testMode.isEnabled && <div className={`
        font-semibold text-[24px]
        bg-red-500 text-white
        text-center
      `}>
        <div className="pb-1 pt-1">
          {`Test Mode is ${testMode.isEnabled?"on":"off"}`}
        </div>
        <SubtleButton
          handleClick={() => {
            testModeDispatch({type:"turnOff"})
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
