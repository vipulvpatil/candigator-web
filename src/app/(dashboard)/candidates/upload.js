export const getUploadData = async (files) => {
  const body = JSON.stringify(
    files.map((file) => {
      return {name: file.name}
    })
  )
  const resp = await fetch("/presigned_urls", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body
  })

  const respJson = await resp.json()
  const uploadDataMap = convertUploadDataToMap(respJson.fileUploads)
  return addUploadDataToFiles(uploadDataMap, files)
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
        status: "Uploading",
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
          status: "Upload almost done",
        },
      )
    } else {
      return Object.assign(
        fileWithUData,
        {
          status: "Upload failed",
        },
      )
    }
  } catch (err) {
    return Object.assign(
      fileWithUData,
      {
        status: "Upload failed",
      },
    )
  }
}


export const updateUploadData = async (completedFileUploads) => {
  const body = JSON.stringify(
    completedFileUploads.map((completedFileUpload) => {
      if (completedFileUpload.status === "Upload almost done") {
        return {id: completedFileUpload.uploadData.id, status: "SUCCESS"}
      } else {
        return {id: completedFileUpload.uploadData.id, status: "FAILURE"}
      }
    })
  )
  const resp = await fetch("/file_uploads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body
  })

  const respJson = await resp.json()
  const uploadDataMap = convertUploadDataToMap2(respJson.fileUploads)
  return addUploadDataToFiles2(uploadDataMap, completedFileUploads)
}

const convertUploadDataToMap2 = (uploadData) => {
  const dataMap = {}
  uploadData.forEach(data => {
    dataMap[data.id] = data
  })
  return dataMap
}

const addUploadDataToFiles2 = (uploadDataMap, completedFileUploads) => {
  return completedFileUploads.map((file => {
    return Object.assign(
      file,
      {
        status: "Uploaded",
        uploadData: uploadDataMap[file.uploadData.id],
      },
    )
  }))
}
