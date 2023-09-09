"use client"
import {TestModeContext, TestModeDispatchContext} from "./test_mode_context"
import {useReducer} from "react"
import {useSearchParams} from "next/navigation"

function testDataReducer(testData, action) {
  switch(action.type) {
    case "toggle":
      return {...testData, status: !testData.status}
  }
}

const TestModeProvider = ({children}) => {
  const searchParams = useSearchParams()
  const testDataState = Boolean(searchParams.get("test_data"))
  const [testData, testDataDispatch] = useReducer(testDataReducer, {status: !!testDataState})

  return <>
    <TestModeContext.Provider value={testData}>
      <TestModeDispatchContext.Provider value={testDataDispatch}>
        {children}
      </TestModeDispatchContext.Provider>
    </TestModeContext.Provider>
  </>
}

export default TestModeProvider
