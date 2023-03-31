import styles from './Gallery.module.css'
import PhotoCard from '../../components/PhotoCard/PhotoCard';

function Gallery(props) {
  return(
    <>
      <h1>Gallery</h1>
      <div className={styles.container}>
        {props.photos.map(photo =>
        <PhotoCard key={photo._id} photo={photo} handleDeletePhoto={props.handleDeletePhoto} user={props.user}/>
      )}
      </div>
    </>
  )
}

export default Gallery;