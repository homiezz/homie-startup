import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./ReviewModal.css";

const AddImageModal = ({
  showAddImageModal,
  handleCloseAddImageModal,
  onSaveProfilePic,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePhotoUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const selectedFile = files[0];
      setSelectedImage(selectedFile);
    }
  };

  const handleSaveProfilePic = () => {
    // TODO: logic to save the new profile picture
    if (selectedImage) {
      // Include logic to handle the new profile picture (selectedImage)
      console.log("New profile picture:", selectedImage);
      onSaveProfilePic(URL.createObjectURL(selectedImage));
    }

    setSelectedImage(null);
    handleCloseAddImageModal();
  };

  return (
    <Modal
      className="custom-modal"
      show={showAddImageModal}
      onHide={handleCloseAddImageModal}
      centered
    >
      <Modal.Body className="modal-body">
        <Form>
          <Form.Group className="modal-field" controlId="formPhotoUpload">
            <Form.Label>Incarcă poze:</Form.Label>
            <CloudUploadIcon style={{ marginLeft: "5px" }} />
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
            <small className="text-muted">
              Dimensiune maximă per fișier este de 5MB
            </small>
          </Form.Group>
          {selectedImage && (
            <img
              className="selected-image-preview"
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
            />
          )}
          <div className="submit-form-button-container">
            <Button
              className="submit-form-button"
              type="button"
              onClick={handleSaveProfilePic}
            >
              Salvează
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddImageModal;
