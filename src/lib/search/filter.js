export const criteriaOptions = [
  {label:"Tech Skills", value: "Tech Skills", optType: "stringArray"},
  {label:"Soft Skills", value: "Soft Skills", optType: "stringArray"},
  {label:"Years of Experience", value: "YoE", optType: "number"},
  {label:"Recommended Roles", value: "Recommended Roles", optType: "stringArray"},
  {label:"Education", value: "Education", optType: "objectArray"},
  {label:"Experience", value: "Experience", optType: "objectArray"},
  {label:"State", value: "State", optType: "string"},
  {label:"City", value: "City", optType: "string"},
  {label:"Country", value: "Country", optType: "string"},
  {label:"Certifications", value: "Certifications", optType: "stringArray"},
  {label:"Name", value: "Name", optType: "string"},
  {label:"Email", value: "Email", optType: "string"},
  {label:"Phone", value: "Phone", optType: "string"},
]

const criteriaTypeMapping = Object.fromEntries(
  criteriaOptions.map(c => {
    return [c.value, c.optType]
  })
)

export const comparatorOptions = [
  {label:"Contains", value: "Contains", allowedTypes: {"string": true, "number": false, "objectArray": true, "stringArray": true}},
  {label:"Is", value: "Is", allowedTypes: {"string": true, "number": true, "objectArray": true, "stringArray": true}},
  {label:"Does not contain", value: "Does not contain", allowedTypes: {"string": true, "number": false, "objectArray": true, "stringArray": true}},
  {label:"Is Not", value: "Is Not", allowedTypes: {"string": true, "number": true, "objectArray": true, "stringArray": true}},
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
  let filteredCandidates = candidates
  filters.forEach(filter => {
    filteredCandidates = applyFilter(filteredCandidates, filter)
  })
  // TODO: apply filters here
  return filteredCandidates
}

const applyFilter = (candidates, searchFilter) => {
  return candidates.filter(candidate => {
    const criteriaValue = candidate.displayPersona[searchFilter.criteria]
    return valueMatchesComparatorValue(criteriaValue, searchFilter.comparator, searchFilter.value)
  })
}

const valueMatchesComparatorValue = (value, comparator, filterValue) => {
  switch (comparator) {
    case "Is":
      return String(value) === filterValue
    case "Is Not":
      return String(value) !== filterValue
    case "Contains":
      if(Array.isArray(value)) {
        return arrayContains(value, filterValue)
      } else if(typeof value === "string") {
        return stringContains(value, filterValue)
      }
      return false
    case "Does not contain":
      if(Array.isArray(value)) {
        return !arrayContains(value, filterValue)
      } else if(typeof value === "string") {
        return !stringContains(value, filterValue)
      }
      return true
    case "Greater than":
      return value > filterValue
    case "Greater than or equal to":
      return value >= filterValue
    case "Less than":
      return value < filterValue
    case "Less than or equal to":
      return value <= filterValue
  }
}

const arrayContains = (arrayValue, filterValue) => {
  const matchedElements = arrayValue.filter(v => {
    if(typeof v === "object") {
      let found = false
      Object.values(v).forEach(elem => {
        const elemString = String(elem)
        if(stringContains(elemString, filterValue)) {
          found = true
        }
      })
      return found
    } else if (typeof v === "string") {
      if(stringContains(v, filterValue)) {
        return true
      }
    }
    return false
  })

  return matchedElements?.length > 0
}

const stringContains = (value, filterValue) => {
  console.log(value)
  return value.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
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
