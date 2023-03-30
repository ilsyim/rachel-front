
function PhotoCard({photo, handleDeletePhoto, user}) {
  return(
    <div className="card">
      {/* <img src=`${photo.photo}` alt="" /> */}
      <div className="card-body">
        <h2 className="card-text">{photo.photoTitle}</h2>
        <p className="card-text">{photo.photoEvent} on {photo.photoDate}</p>
      </div>
      {user?.profile === photo.owner._id &&
      <div className="card-footer">
        <button className="btn btn-sm btn-danger m-left" onClick={() => handleDeletePhoto(photo._id)}>
          Delete
        </button>
      </div>
      }
    </div>
      
  )
}

export default PhotoCard