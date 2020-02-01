import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addObservation } from '../../actions/observationActions'
import useField from '../../hooks'
import { Container, Form, Modal, Button } from 'react-bootstrap'

const CreateObservation = props => {
  const [name, nameReset] = useField('text')
  const [rarity, rarityReset] = useField('text')
  const [notes, notesReset] = useField('text')
  const [uploadFile, setUploadFile] = useState(null)
  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
    nameReset()
    rarityReset()
    notesReset()
  }
  const handleShow = () => setShow(true)

  const fileSelectHandler = event => {
    setUploadFile(event.target.files[0])
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('rarity', rarity.value)
    formData.append('notes', notes.value)
    formData.append('observationImage', uploadFile)
    if (name.value) {
      props.addObservation(formData)
      props.history.push('/')
    }
    handleClose()
  }
  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm observation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to add this observation</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save observation
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="py-5 text-center">
        <h2>Add your observation</h2>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          iste.
        </p>
      </div>
      <Form onSubmit={handleSubmit}>
        <h4>Details of observation</h4>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter bird name"
            name="name"
            {...name}
          />
        </Form.Group>

        <Form.Group controlId="formRarity">
          <Form.Label>Rarity</Form.Label>
          <Form.Control as="select" name="rarity" {...rarity}>
            <option>Choose...</option>
            <option>common</option>
            <option>rare</option>
            <option>extremely rare</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formNotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" rows="3" name="notes" {...notes} />
        </Form.Group>

        <Form.Group controlId="formFile" className="custom-file mb-3">
          <Form.Label className="custom-file-label">Choose file</Form.Label>
          <Form.Control
            type="file"
            className="custom-file-input"
            name="filename"
            onChange={fileSelectHandler}
          />
        </Form.Group>

        <Button variant="primary" block onClick={handleShow} className="mb-3">
          Add observation
        </Button>
      </Form>
    </Container>
  )
}

CreateObservation.propTypes = {
  addObservation: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  addObservation
}

export default connect(null, mapDispatchToProps)(CreateObservation)
