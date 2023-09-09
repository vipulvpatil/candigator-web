"use client"

import {TestModeContext, TestModeDispatchContext} from "./test_mode_context"
import {useReducer} from "react"
import {useSearchParams} from "next/navigation"

function testModeReducer(testMode, action) {
  switch(action.type) {
    case "turnOn":
      return {...testMode, status: true}
    case "turnOff":
      return {...testMode, status: false}
    default:
      return {...testMode}
  }
}

const TestModeProvider = ({children}) => {
  const searchParams = useSearchParams()
  const testModeParam = searchParams.get("testMode")
  const [testMode, testModeDispatch] = useReducer(testModeReducer, {status: !!testModeParam})

  return <>
    <TestModeContext.Provider value={testMode}>
      <TestModeDispatchContext.Provider value={testModeDispatch}>
        {children}
      </TestModeDispatchContext.Provider>
    </TestModeContext.Provider>
  </>
}

export default TestModeProvider
