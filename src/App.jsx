// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AddPhoto from './pages/AddPhoto/AddPhoto'
import Gallery from './pages/Gallery/Gallery'
import EditPhoto from './pages/EditPhoto/EditPhoto'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as photoService from './services/photoService'

// styles
import './App.css'
import PhotoShow from './pages/PhotoShow/PhotoShow'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const [photos, setPhotos] = useState([])

  const handleAddPhoto = async (newPhotoData, photo) => {
    const newPhoto = await photoService.create(newPhotoData)
    if (photo) {
      newPhoto.photo = await photoHelper(photo, newPhoto._id)
    }
    setPhotos([...photos, newPhoto])
    navigate('/')
  }

  const photoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await photoService.addPhoto(photoData, id)
  }

  useEffect(() => {
    const fetchAllPhotos = async () =>  {
      const photoData = await photoService.getAll()
      setPhotos(photoData)
    }
    fetchAllPhotos()
  }, [])

  const handleDeletePhoto = async id => {
    const deletedPhoto = await photoService.deleteOne(id)
    setPhotos(photos.filter(photo => photo._id !== deletedPhoto._id))
    navigate('/')
  }

  const handleUpdatePhoto = async (updatedPhotoData, photo) => {
    const updatedPhoto = await photoService.update(updatedPhotoData)
    if (photo) {
      updatedPhoto.photo = await photoHelper(photo, updatedPhoto._id)
    }
    const newPhotosArray = photos.map(photo =>
      photo._id === updatedPhoto._id ? updatedPhoto : photo)
      setPhotos(newPhotosArray)
      navigate('/')
  }

  return (
    <>
      <div className='App'>
        <NavBar user={user} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Gallery photos={photos} handleDeletePhoto={handleDeletePhoto} user={user}/>} />
          <Route path="/add" element={<AddPhoto handleAddPhoto={handleAddPhoto} />}
          />
          <Route path='/edit' element={<EditPhoto handleUpdatePhoto={handleUpdatePhoto}/>} />
          <Route path="/photos/:photoId" element={<PhotoShow user={user} setPhotos={setPhotos} handleDeletePhoto={handleDeletePhoto}/>} />
          <Route
            path="/signup"
            element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route
            path="/login"
            element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route
            path="/profiles"
            element={
              <ProtectedRoute user={user}>
                <Profiles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/change-password"
            element={
              <ProtectedRoute user={user}>
                <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
