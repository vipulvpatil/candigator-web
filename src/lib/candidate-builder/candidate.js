import {buildPersona, buildResultantPersona} from "./persona"

export const processCandidates = (candidates) => {
  return candidates?.map(candidate => {
    return processCandidate(candidate)
  })
}

export const processCandidate = (candidate) => {
  const aiGeneratedPerson = buildPersona(candidate.aiGeneratedPersona) || {}
  const manuallyCreatedPersona = buildPersona(candidate.manuallyCreatedPersona)
  const displayPersona = buildResultantPersona(aiGeneratedPerson, manuallyCreatedPersona)
  Object.assign(candidate, {
    name: displayPersona.Name,
    designation: displayPersona["Recommended Roles"][0],
    company: displayPersona["Education"][0]["Institute"],
    updated_at: "324 days ago",
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
