export const getUploadData = async (files) => {
  const body = JSON.stringify(
    files.map((file) => {
      return {name: file.name}
    })
  )
  const resp = await fetch("/files", {method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body
  })

  const respJson = await resp.json()
  return respJson.fileUploads
}

export const convertUploadDataToMap = (uploadData) => {
  const dataMap = {}
  uploadData.forEach(data => {
    dataMap[data.name] = data
  })
  return dataMap
}

export const addUploadDataToFiles = (uploadDataMap, files) => {
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
    if (result.status === "fulfilled") {
      return result.value
    } else {
      return Object.assign(
        result.value,
        {
          status: "Upload failed",
        },
      )
    }
  })
}

const uploadFile = async (fileWithUData) => {
  // TODO: Actual uploading
  return Object.assign(
    fileWithUData,
    {
      status: "Upload completed successfully",
    },
  )
}
