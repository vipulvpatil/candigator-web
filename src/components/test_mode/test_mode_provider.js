"use client"

import {TestModeContext, TestModeDispatchContext} from "./test_mode_contexts"
import {defaultCandidates} from "./test_mode_data"
import {signOut} from "next-auth/react"
import {useReducer} from "react"
import {useSearchParams} from "next/navigation"

function testModeReducer(testMode, action) {
  let newTestMode
  switch(action.type) {
    case "turnOn":
      signOut({redirect: false})
      newTestMode = {...testMode, isEnabled: true}
      break
    case "turnOff":
      newTestMode = {...testMode, isEnabled: false}
      break
    case "save":{
      const seconds = new Date().getTime() / 1000
      if(action.id) {
        let newCandidates = []
        testMode.candidates.forEach(c => {
          if(c.id === action.id) {
            c.manuallyCreatedPersona = JSON.stringify(action.data)
            c.updatedAt.seconds = seconds
          }
          newCandidates.push(c)
        })
        newTestMode = {...testMode, candidates: newCandidates}
        break
      } else {
        const newId = "hogwarts_" + Math.random().toString(16).slice(2)
        let newCandidates = testMode.candidates
        newCandidates.push({
          id: newId,
          aiGeneratedPersona: "",
          manuallyCreatedPersona: JSON.stringify(action.data),
          fileUploadId: "",
          updatedAt: {seconds: seconds, nanos: 999000000},
        })
        newTestMode = {...testMode, candidates: newCandidates}
        break
      }
    }
    default:
      newTestMode = {...testMode}
      break
  }
  setItemInLocalStorage("testMode", JSON.stringify(newTestMode))
  return newTestMode
}

const initLocalStorageIfNotPresent = () => {
  let testModeInLocalStorage
  const storedTestMode = getItemFromLocalStorage("testMode")
  if(storedTestMode) {
    testModeInLocalStorage = JSON.parse(storedTestMode)
  } else {
    testModeInLocalStorage = {isEnabled: false, candidates: defaultCandidates}
    setItemInLocalStorage("testMode", JSON.stringify(testModeInLocalStorage))
  }
  return testModeInLocalStorage
}

const setItemInLocalStorage = (key, item) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, item)
  }
}

const getItemFromLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key)
  }
  return null
}

const TestModeProvider = ({children}) => {
  const searchParams = useSearchParams()
  let testModeInLocalStorage = initLocalStorageIfNotPresent()
  const testModeParam = Boolean(searchParams.get("testMode"))
  if(testModeParam) {
    signOut({redirect: false})
    testModeInLocalStorage.isEnabled = testModeParam
  }

  const [testMode, testModeDispatch] = useReducer(testModeReducer, testModeInLocalStorage)

  return <>
    <TestModeContext.Provider value={testMode}>
      <TestModeDispatchContext.Provider value={testModeDispatch}>
        {children}
      </TestModeDispatchContext.Provider>
    </TestModeContext.Provider>
  </>
}

export default TestModeProvider
