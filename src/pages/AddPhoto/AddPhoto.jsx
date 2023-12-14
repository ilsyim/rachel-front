import { useState, useRef, useEffect } from "react"

function AddPhoto(props) {
  const formElement = useRef()

  const [validForm, setValidForm] = useState(false)

  const [formData, setFormData] = useState ({
    photoTitle: '',
    photoEvent: '',
    photoDate: {type: Date},
    essay: '',
  })

  const [photoData, setPhotoData] = useState({})

  const {photoTitle, photoEvent, photoDate} = formData

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  const handleChangePhoto = evt => {
		setPhotoData({ photo: evt.target.files[0] })
	}
	console.log(handleChangePhoto, 'upload')

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)}, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddPhoto(formData, photoData.photo)
    console.log(photoData.photo, 'photo')
  }
  

	return (
		<>
			<h1>Add Photo</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="title-input" className="form-label">
        <div className="form-group mb-4">
					<label htmlFor="photo-upload" className="form-label">
						Upload Photo
					</label>
					<input 
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
            onChange={handleChangePhoto}
					/>
        </div>
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
				<div className="form-group mb-4">
					<label htmlFor="photoDate-input" className="form-label">
						Date
					</label>
					<input 
						type="date"
						className="form-control"
						id="photoDate"
						name="photoDate"
            value={photoDate}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
            <textarea className="textArea" value={photoData.essay} name="essay" onChange={handleChange} id="" cols="120" rows="10" placeholder="Insert Writing Here..."></textarea>
        </div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Photo
					</button>
				</div>
			</form>
		</>
	)
}

export default AddPhoto