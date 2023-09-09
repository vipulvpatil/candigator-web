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

const defaultCandidates = [
  {
    id: "hogwarts_1",
    aiGeneratedPersona: "",
    manuallyCreatedPersona: "{\"Name\":\"Tom M. Riddle\",\"Email\":\"lordvoldermort@deatheaters.com\",\"Phone\":\"die-die-die\",\"City\":\"Little Hangleton\",\"State\":\"London\",\"Country\":\"UK\",\"YoE\":5,\"Tech Skills\":[\"Dueling\",\"All regular magic\",\"Forbidden magic\",\"Death magic\"],\"Soft Skills\":[\"Intimidation\",\"Never die attitude\",\"Parseltongue\"],\"Recommended Roles\":[\"Greatest Dark Wizard\"],\"Education\":[{\"Institute\":\"Hogwarts\",\"Qualification\":\"N.E.W.T.S.\",\"CompletionYear\":\"2000\"},{\"Institute\":\"Hogwarts\",\"Qualification\":\"O.W.L.\",\"CompletionYear\":\"1998\"}],\"Experience\":[{\"Title\":\"Lead Dark Wizard\",\"Company Name\":\"Dark Wizard Inc.\",\"Starting Year\":\"2001\",\"Ending Year\":\"2005\"}],\"Certifications\":[\"Hogwarts Prefect\"],\"BuiltBy\":\"HUMAN\"}",
    fileUploadId: "",
    updatedAt: {seconds: "1693976555", nanos: 999000000},
  },
]

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
