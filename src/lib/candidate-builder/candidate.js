import {buildPersona, buildResultantPersona} from "./persona"

export const processCandidates = (candidates) => {
  return candidates?.map(candidate => {
    return processCandidate(candidate)
  })
}

export const processCandidate = (candidate) => {
  let date = new Date(candidate.updatedAt.seconds * 1000)
  const aiGeneratedPerson = buildPersona(candidate.aiGeneratedPersona) || {}
  const manuallyCreatedPersona = buildPersona(candidate.manuallyCreatedPersona)
  const displayPersona = buildResultantPersona(aiGeneratedPerson, manuallyCreatedPersona)
  Object.assign(candidate, {
    name: displayPersona.Name,
    designation: displayPersona["Recommended Roles"]?.[0],
    company: displayPersona["Education"]?.[0]?.["Institute"],
    updatedAtString: convertDateToLocalRelativeTime(date),
    displayPersona: displayPersona,
  })
  return candidate
}

export const emptyCandidate = {
  displayPersona: {
    Name: "",
    Email: "",
    Phone: "",
    City: "",
    State: "",
    Country: "",
    YoE: 0,
    Experience: [{
      "Company Name": "",
      "Starting Year": "",
      "Ending Year": "",
      Ongoing: "",
    }],
    Education: [{
      Institute: "",
      Qualification: "",
      CompletionYear: "",
    }],
    "Tech Skills": [""],
    "Soft Skills": [""],
    "Recommended Roles": [""],
    Certifications: [""],
  }
}

const convertDateToLocalRelativeTime = (date) => {
  let currentTime = new Date(Date.now())
  return timeIntervalAsString(date, currentTime)
}



const timeIntervalAsString = (startDate, endDate) => {
  let milliseconds = millisecondsBetween(startDate, endDate)
  const days = asDays(milliseconds)
  if(days > 1) {
    return `${days} days ago`
  }

  if(days == 1) {
    return "yesterday"
  }

  let hours = asHours(milliseconds)
  if(hours > 1) {
    return `${hours} hours ago`
  }

  if(hours == 1) {
    return `${hours} hour ago`
  }

  let minutes = asMinutes(milliseconds)
  if(minutes > 1) {
    return `${minutes} mins ago`
  }

  if(minutes == 1) {
    return `${minutes} minute ago`
  }

  return "just now"
}

const asDays = (milliseconds) => {
  var millisecondsPerDay = 24 * 60 * 60 * 1000
  return Math.floor(milliseconds/millisecondsPerDay)
}

const asHours = (milliseconds) => {
  var millisecondsPerHour = 60 * 60 * 1000
  return Math.floor(milliseconds/millisecondsPerHour)
}

const asMinutes = (milliseconds) => {
  var millisecondsPerMinute = 60 * 1000
  return Math.floor(milliseconds/millisecondsPerMinute)
}

// These function accounts for Daylight savings
const treatAsUTC = (date) => {
  var result = new Date(date)
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset())
  return result
}

const millisecondsBetween = (startDate, endDate) => {
  return (treatAsUTC(endDate) - treatAsUTC(startDate))
}
