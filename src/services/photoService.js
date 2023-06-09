import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/photos`

async function create(photo) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(photo)
  })
	return res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}

async function addPhoto(photoData, photoId) {
  console.log('photoId', photoId)
  const res = await fetch(`${BASE_URL}/${photoId}/add-photo`, {
    method: "PUT",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
    body: photoData
  })
  return await res.json()
}

async function deleteOne(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

async function update(photo, photoId) {
  const res = await fetch(`${BASE_URL}/${photo._id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(photo)
  })
  return res.json()
}

async function show(photoId) {
  const res = await fetch(`${BASE_URL}/${photoId}`)
  return await res.json()
}


export {
	create,
  getAll,
  addPhoto,
  deleteOne,
  update,
  show,
}