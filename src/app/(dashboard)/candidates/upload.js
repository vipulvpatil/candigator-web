export const createFileUploadData = async (files) => {
  const fileUploadData = await createFileUploads(files)
  const uploadDataMap = convertUploadDataToMap(fileUploadData)
  return addUploadDataToFiles(uploadDataMap, files)
}

const createFileUploads = async (files) => {
  const body = JSON.stringify(
    files.map((file) => {
      return {name: file.name}
    })
  )
  const resp = await fetch("/api/presigned_urls", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body
  })

  const respJson = await resp.json()
  if(respJson.error){
    throw {name : "ServerError", message : respJson.error}
  }

  return respJson.data
}

const convertUploadDataToMap = (uploadData) => {
  const dataMap = {}
  uploadData.forEach(data => {
    dataMap[data.name] = data
  })
  return dataMap
}

const addUploadDataToFiles = (uploadDataMap, files) => {
  return files.map((file => {
    return Object.assign(
      file,
      {
        id: uploadDataMap[file.name].id,
        status: "uploading",
        displayMessage: "Uploading",
        uploadData: uploadDataMap[file.name],
      },
    )
  }))
}

export const uploadFiles = async (filesWithUData) => {
  const uploadResult = await Promise.allSettled(
    filesWithUData.map(fileWithUData => {
      return uploadFile(fileWithUData)
    })
  )
  return uploadResult.map(result => {
    return result.value
  })
}

const uploadFile = async (fileWithUData) => {
  try {
    if (fileWithUData.uploadData.error) {
      return Object.assign(
        fileWithUData,
        {
          status: "uploadFailure",
          displayMessage: "Upload failed",
        },
      )
    }
    var data = new FormData()
    data.append("file", fileWithUData.file)
    const resp = await fetch(fileWithUData.uploadData.presignedUrl, {
      method: "PUT",
      body: data
    })
    if (resp.ok) {
      return Object.assign(
        fileWithUData,
        {
          status: "uploadSuccess",
          displayMessage: "Uploaded almost",
        },
      )
    } else {
      return Object.assign(
        fileWithUData,
        {
          status: "uploadFailure",
          displayMessage: "Upload failed",
        },
      )
    }
  } catch (err) {
    return Object.assign(
      fileWithUData,
      {
        status: "uploadFailure",
        displayMessage: "Upload failed",
      },
    )
  }
}

export const createCompletedFileUploadData = async (completedFileUploads) => {
  const updatedFileUploadData = await completeFileUpload(completedFileUploads)
  const uploadDataMap = convertUpdatedFileUploadDataToMap(updatedFileUploadData)
  return addUpdatedFileUploadDataToFiles(uploadDataMap, completedFileUploads)
}

const completeFileUpload = async (completedFileUploads) => {
  const body = JSON.stringify(
    completedFileUploads.map((completedFileUpload) => {
      if (completedFileUpload.status === "uploadSuccess") {
        return {id: completedFileUpload.id, status: "SUCCESS"}
      } else {
        return {id: completedFileUpload.id, status: "FAILURE"}
      }
    })
  )
  const resp = await fetch("/api/file_uploads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body
  })

  const respJson = await resp.json()
  if(respJson.error){
    throw {name : "ServerError", message : respJson.error}
  }

  return respJson.data
}

const convertUpdatedFileUploadDataToMap = (uploadData) => {
  const dataMap = {}
  uploadData.forEach(data => {
    dataMap[data.id] = data
  })
  return dataMap
}

const addUpdatedFileUploadDataToFiles = (uploadDataMap, completedFileUploads) => {
  return completedFileUploads.map((fileUpload => {
    if (fileUpload.status === "uploadSuccess") {
      return Object.assign(
        fileUpload,
        {
          status: "completedSuccess",
          displayMessage: "Upload success",
          uploadData: uploadDataMap[fileUpload.id],
        },
      )
    } else {
      return Object.assign(
        fileUpload,
        {
          status: "completedFailure",
          displayMessage: "Upload failed",
          uploadData: uploadDataMap[fileUpload.id],
        },
      )
    }
  }))
}
