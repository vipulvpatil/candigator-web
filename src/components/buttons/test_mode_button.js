"use client"

import OutlineButton from "@/components/buttons/generic/outline_button"
import {TestModeDispatchContext} from "@/components/test_mode/test_mode_contexts"
import {useContext} from "react"

const TestModeButton = () => {
  const testModeDispatch = useContext(TestModeDispatchContext)
  return (
    <div className="block">
      <OutlineButton
        handleClick={() => {
          testModeDispatch({type: "turnOn"})
        }}
        customPadding="px-2 py-2"
      >
        {"Turn on test mode"}
      </OutlineButton>
    </div>
  )
}

export default TestModeButton
