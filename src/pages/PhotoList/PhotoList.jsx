import styles from './PhotoList.module.css'
import PhotoCard from '../../components/PhotoCard/PhotoCard';

function PhotoList(props) {
  console.log(props.photos)
  return(
    <>
      <h1>Photo List</h1>
      <div className={styles.container}>
        {props.photos.map(photo =>
        <PhotoCard key={photo._id} photo={photo} handleDeletePhoto={props.handleDeletePhoto} user={props.user}/>
      )}
      </div>
    </>
  )
}

export default PhotoList;