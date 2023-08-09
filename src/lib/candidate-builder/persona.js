export const buildPersona = (personaJsonString) => {
  try {
    const persona = JSON.parse(personaJsonString)
    return persona
  } catch (e) {
    return null
  }
}

export const buildResultantPersona = (originalPersona, overridingPersona) => {
  return Object.assign(originalPersona, overridingPersona)
}
