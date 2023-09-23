import { Link } from 'react-router-dom'

function PhotoCard({photo, handleDeletePhoto, user}) {
  return(
    <div className="card">
      <Link to={`/photos/${photo._id}`} state={{photo}}>
        <img src={photo.photo} alt="Taken by Rachel" className='card-img-top'  style={{width: '280px'}}/>
        <div className="card-body">
          <h2 className="card-text">{photo.photoTitle}</h2>
          <p className="card-text">{photo.photoEvent} on {photo.photoDate}</p>  {/* change date later */}
        </div>
        {user?.profile === photo.owner._id &&
          <div className="card-footer">
            <Link className='btn btn-sm btn-warning' to='/edit' state={{photo}}>Edit</Link>
            <button className="btn btn-sm btn-danger m-left" onClick={() => handleDeletePhoto(photo._id)}>
              Delete
            </button>
          </div>
        }
      </Link>
    </div>
      
  )
}

export default PhotoCard