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
      <div className='show'>
        <div>
          <img alt="" style={{width: '50%vw', height: '400px'}} src={
            photo
            ? photo.photo
            : <p>"No photos yet"</p>}/>
          <div className='button'>
            <Link to="/">Back</Link>
            <Link className='btn btn-sm btn-warning' to='/edit' state={{photo}}>Edit</Link>
            <button className="btn btn-sm btn-danger m-left" onClick={() => props.handleDeletePhoto(photo._id)}>
              Delete
            </button>
          </div>
            {photo.essay}
        </div>
      </div>
    </>
  )










}
export default PhotoShow