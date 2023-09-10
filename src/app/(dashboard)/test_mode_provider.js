"use client"

import {TestModeContext, TestModeDispatchContext} from "./test_mode_context"
import {defaultCandidates} from "./test_mode_data"
import {useReducer} from "react"
import {useSearchParams} from "next/navigation"

function testModeReducer(testMode, action) {
  switch(action.type) {
    case "turnOn":
      return {...testMode, isEnabled: true}
    case "turnOff":
      return {...testMode, isEnabled: false}
    default:
      return {...testMode}
  }
}



const TestModeProvider = ({children}) => {
  const searchParams = useSearchParams()
  const testModeParam = searchParams.get("testMode")
  const [testMode, testModeDispatch] = useReducer(testModeReducer, {status: !!testModeParam, candidates: defaultCandidates})

  return <>
    <TestModeContext.Provider value={testMode}>
      <TestModeDispatchContext.Provider value={testModeDispatch}>
        {children}
      </TestModeDispatchContext.Provider>
    </TestModeContext.Provider>
  </>
}

export default TestModeProvider
