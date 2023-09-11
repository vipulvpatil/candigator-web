"use client"

import {TestModeContext, TestModeDispatchContext} from "./test_mode_contexts"
import {useEffect, useReducer, useState} from "react"
import {defaultCandidates} from "./test_mode_data"
import {signOut} from "next-auth/react"
import {useSearchParams} from "next/navigation"

/*
This is a mess of a class. This whole idea is half baked.
This is an attempt to make a simple test data system that works without loggin in.
It is meant to enable people to try out the app without needing anything from them.
It does that job, but the system is overly complicated.
We use React context (in conjuction with local storage) to enable Local test data"
It works fine, but now the code accepts data from 2 places, one is the server and the other is the client.
This makes the overall code really messy.
Note for future dev. Here are a few options to clean this up.
1. Make it so that all server data is downloaded and maintained in local storage.
And the app only accesses and works with local storage or another DB system.
2. Remove test data setup completely.
3. Make test data setup work on server.
*/

const createOrGetLocalStoredTestModeData = () => {
  let testModeInLocalStorage
  const storedTestMode = getItemFromLocalStorage("testMode")
  if(storedTestMode) {
    testModeInLocalStorage = JSON.parse(storedTestMode)
  } else {
    testModeInLocalStorage = {isEnabled: false, candidates: defaultCandidates}
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
  const [updatedLocalStorage, setUpdatedLocalStorage] = useState(null)

  const testModeReducer = (testMode, action) => {
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
      case "init":
        newTestMode = {...action.data}
        break
      default:
        newTestMode = {...testMode}
        break
    }
    // setItemInLocalStorage("testMode", JSON.stringify(newTestMode))
    setUpdatedLocalStorage(newTestMode)
    return newTestMode
  }
  const [testMode, testModeDispatch] = useReducer(testModeReducer, {})

  useEffect(() => {
    if (updatedLocalStorage) {
      setItemInLocalStorage("testMode", JSON.stringify(updatedLocalStorage))
    }
    setUpdatedLocalStorage(null)
  }, [updatedLocalStorage])

  useEffect(() => {
    let testModeInLocalStorage = createOrGetLocalStoredTestModeData()
    const testModeParam = Boolean(searchParams.get("testMode"))
    if(testModeParam) {
      signOut({redirect: false})
      testModeInLocalStorage.isEnabled = testModeParam
    }
    testModeDispatch({type: "init", data: testModeInLocalStorage})
  }, [])

  return <>
    <TestModeContext.Provider value={testMode}>
      <TestModeDispatchContext.Provider value={testModeDispatch}>
        {children}
      </TestModeDispatchContext.Provider>
    </TestModeContext.Provider>
  </>
}

export default TestModeProvider
