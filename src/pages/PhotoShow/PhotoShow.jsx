import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { show } from '../../services/photoService'

const PhotoShow = (props) => {
  console.log(props, )
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
      <div className='show' >
        {props.user ?
        
        <div className='imgBack'>
          <img className='imgShow' alt="" src={
            photo
            ? photo.photo
            : <p>"No photos yet"</p>}/>
              
              <div className='button'>
                <Link to="/">Back</Link>
                {props.user.profile === photo.owner &&
                <>
                <Link className='btn btn-sm btn-warning' to='/edit' state={{photo}}>Edit</Link>
                <button className="btn btn-sm btn-danger m-left" onClick={() => props.handleDeletePhoto(photo._id, props.photoData)}>
                  Delete
                </button>
                </>              
                }
              </div>
          <div className='essay'>
            {photo.essay}
          </div>
        </div>
      :
      <div className='imgBack'>
        
      <img className='imgShow' alt="" style={{width: '50%vw', height: '400px'}} src={
        photo
        ? photo.photo
        : <p>"No photos yet"</p>}/>
        <div className='paragraph'>
          {photo.essay}
          <Link to="/">Back</Link>
        </div>
      </div>

        }
      </div>
    </>
  )










}
export default PhotoShow