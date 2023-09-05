export const criteriaOptions = [
  {label:"Name", value: "Name", optType: "string"},
  {label:"Email", value: "Email", optType: "string"},
  {label:"Phone", value: "Phone", optType: "string"},
  {label:"State", value: "State", optType: "string"},
  {label:"City", value: "City", optType: "string"},
  {label:"Country", value: "Country", optType: "string"},
  {label:"Years of Experience,", value: "YoE", optType: "number"},
  {label:"Experience", value: "Experience", optType: "objectArray"},
  {label:"Education", value: "Education", optType: "objectArray"},
  {label:"Tech Skills", value: "Tech Skills", optType: "stringArray"},
  {label:"Soft Skills", value: "Soft Skills", optType: "stringArray"},
  {label:"Recommended Roles", value: "Recommended Roles", optType: "stringArray"},
  {label:"Certifications", value: "Certifications", optType: "stringArray"},
]

const criteriaTypeMapping = Object.fromEntries(
  criteriaOptions.map(c => {
    return [c.value, c.optType]
  })
)

export const comparatorOptions = [
  {label:"Is", value: "Is", allowedTypes: {"string": true, "number": true, "objectArray": true, "stringArray": true}},
  {label:"Is Not", value: "Is Not", allowedTypes: {"string": true, "number": true, "objectArray": true, "stringArray": true}},
  {label:"Contains", value: "Contains", allowedTypes: {"string": true, "number": false, "objectArray": true, "stringArray": true}},
  {label:"Does not contain", value: "Does not contain", allowedTypes: {"string": true, "number": false, "objectArray": true, "stringArray": true}},
  {label:"Greater than", value: "Greater than", allowedTypes: {"string": false, "number": true, "objectArray": false, "stringArray": false}},
  {label:"Greater than or equal to", value: "Greater than or equal to", allowedTypes: {"string": false, "number": true, "objectArray": false, "stringArray": false}},
  {label:"Less than", value: "Less than", allowedTypes: {"string": false, "number": true, "objectArray": false, "stringArray": false}},
  {label:"Less than or equal to", value: "Less than or equal to", allowedTypes: {"string": false, "number": true, "objectArray": false, "stringArray": false}},
]

const comparatorAllowedTypesMapping = Object.fromEntries(
  comparatorOptions.map(c => {
    return [c.value, c.allowedTypes]
  })
)

export const sanitizeFilters = (filters) => {
  return filters.filter((f) => {
    const criteriaType = criteriaTypeMapping[f.criteria]
    if(!criteriaType) {
      return false
    }
    if(!criteriaValueMatchesType(f.value, criteriaType)) {
      return false
    }

    const comparatorsAllowed = comparatorAllowedTypesMapping[f.comparator]
    if(!comparatorsAllowed) {
      return false
    }
    return comparatorsAllowed[criteriaType]
  })
}

export const applyFilters = (candidates, filters) => {
  if(!filters || filters.length == 0) {
    return candidates
  }
  // TODO: apply filters here
  return candidates
}

const criteriaValueMatchesType = (value, criteriaType) => {
  switch(criteriaType) {
    case "number":
      if(isNaN(Number(value))) {
        return false
      }
    break
  }
  return true
}
