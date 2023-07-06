import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

function EditPhoto(props) {
  const formElement = useRef()
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.photo)

  const [validForm, setValidForm] = useState(true)

  const [photoData, setPhotoData] = useState({})

  const {photoTitle, photoEvent, photoDate, essay} = formData

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  const handleChangePhoto = evt => {
		setFormData({ photo: evt.target.files[0] })
	}

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)}, [formData])

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      props.handleUpdatePhoto(formData)
    } catch (err) {
      console.log(err)
    }
  }

	return (
		<>
			<h1>Edit Photo</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="title-input" className="form-label">
						Photo Title (required)
					</label>
					<input 
						type="text"
            autoComplete="off"
						className="form-control"
						id="photoTitle"
						name="photoTitle"
            value={photoTitle}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="photoEvent-input" className="form-label">
						Event (required)
					</label>
					<input 
						type="text"
            autoComplete="off"
						className="form-control"
						id="photoEvent"
						name="photoEvent"
            value={photoEvent}
						required
            onChange={handleChange}
					/>
				</div>
				{/* <div className="form-group mb-4">
					<label htmlFor="photoDate-input" className="form-label">
						Date
					</label>
					<input 
						type="datetime"
						className="form-control"
						id="photoDate"
						name="photoDate"
            value={location.state.photo.photoDate}
            onChange={handleChange}
					/>
				</div> */}
        <div className="form-group mb-4">
            <textarea className="textArea" value={formData.essay} name="essay" onChange={handleChange} id="" cols="120" rows="10"></textarea>
        </div>
        <div className="d-grid">
					<Link to="/" className="btn btn-danger btn-fluid">Cancel</Link>
        </div>
        {/* <div className="form-group mb-4">
					<label htmlFor="photo-upload" className="form-label">
						{formData.photo ? "Replace existing photo" : "Add Photo"}
					</label>
					<input 
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
            onChange={handleChangePhoto}
					/>
        </div> */}
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Save Photo
					</button>
				</div>
			</form>
		</>
	)
}

export default EditPhoto