import { Link } from 'react-router-dom'

function PhotoCard({photo, handleDeletePhoto, user}) {
  return(
    <div className="card">
      <Link to={`/photos/${photo._id}`} state={{photo}}>
        <img src={photo.photo} alt="Uploaded by User" className='card-img-top'  style={{width: '280px'}}/>
        <div className="card-body">
          <h2 className="card-text">{photo.photoTitle}</h2>
          <p className="card-text">{photo.photoEvent} on {photo.photoDate}</p>  {/* change date later */}
        </div>

      </Link>
    </div>
      
  )
}

export default PhotoCard