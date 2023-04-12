import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { show } from '../../services/photoService'

const PhotoShow = (props) => {

  const [photo, setPhoto] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchPhoto = async() => {
      const photoData = await show(location.state.photo._id)
      setPhoto(photoData)
    }
    fetchPhoto()
  })


  return (
    <>
      <div>
        <img src={photo.photo}/>
      </div>
    </>
  )










}
export default PhotoShow