
const eventMap = {
  FileUploadedEvent: "PRS_FileUploadedEvent",
}

export const logAnalyticsEvent = async (window, eventName, data = null) => {
  const event = eventMap[eventName]
  if(!event) {
    return
  }
  let eventWithData
  if(data){
    eventWithData = Object.assign({event}, data)
  } else {
    eventWithData = {event}
  }
  if (window && window.dataLayer) {
    window.dataLayer.push(eventWithData)
  }
}
