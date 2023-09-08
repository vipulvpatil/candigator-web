"use client"

const isTestMode = () => {
  const testMode = localStorage.getItem("test_mode")
  if (testMode) {
    return testMode
  }
  return false
}

const setTestMode = (on) => {
  localStorage.setItem("test_mode", on)
}

// const saveTestData = (personaData) => {
//   localStorage.setItem("test_data", JSON.stringify(personaData))
// }

// const loadTestData = () => {
//   return JSON.parse(localStorage.getItem("test_data"))
// }

export {isTestMode, setTestMode}
