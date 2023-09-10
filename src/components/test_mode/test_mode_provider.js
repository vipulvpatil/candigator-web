"use client"

import {TestModeContext, TestModeDispatchContext} from "./test_mode_contexts"
import {defaultCandidates} from "./test_mode_data"
import {useReducer} from "react"
import {useSearchParams} from "next/navigation"

function testModeReducer(testMode, action) {
  switch(action.type) {
    case "turnOn":
      return {...testMode, isEnabled: true}
    case "turnOff":
      return {...testMode, isEnabled: false}
    case "save":
      if(action.id) {
        let newCandidates = []
        testMode.candidates.forEach(c => {
          if(c.id === action.id) {
            c.manuallyCreatedPersona = JSON.stringify(action.data)
          }
          newCandidates.push(c)
        })
        return {...testMode, candidates: newCandidates}
      } else {
        const newId = "hogwarts_" + Math.random().toString(16).slice(2)
        const seconds = new Date().getTime() / 1000
        let newCandidates = testMode.candidates
        newCandidates.push({
          id: newId,
          aiGeneratedPersona: "",
          manuallyCreatedPersona: JSON.stringify(action.data),
          fileUploadId: "",
          updatedAt: {seconds: seconds, nanos: 999000000},
        })
        return {...testMode, candidates: newCandidates}
      }
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
