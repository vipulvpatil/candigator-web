export const criteriaOptions = [
  {label:"Name", value: "Name"},
  {label:"Email", value: "Email"},
  {label:"Phone", value: "Phone"},
  {label:"State", value: "State"},
  {label:"City", value: "City"},
  {label:"Country", value: "Country"},
  {label:"Years of Experience,", value: "YoE",},
  {label:"Experience", value: "Experience"},
  {label:"Education", value: "Education"},
  {label:"Tech Skills", value: "Tech Skills"},
  {label:"Soft Skills", value: "Soft Skills"},
  {label:"Recommended Roles", value: "Recommended Roles"},
  {label:"Certifications", value: "Certifications"},
]

export const comparatorOptions = [
  {label:"Is", value: "Is"},
  {label:"Is Not", value: "Is Not"},
  {label:"Contains", value: "Contains"},
  {label:"Does not contain", value: "Does not contain"},
  {label:"Greater than", value: "Greater than"},
  {label:"Greater than or equal to", value: "Greater than or equal to"},
  {label:"Less than", value: "Less than"},
  {label:"Less than or equal to", value: "Less than or equal to"},
]

export const sanitizeFilters = (filters) => {
  // TODO: remove filters that are incorrect
  return filters
}

export const applyFilters = (candidates, filters) => {
  if(!filters || filters.length == 0) {
    return candidates
  }
  // TODO: apply filters here
  return candidates
}
