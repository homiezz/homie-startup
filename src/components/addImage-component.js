import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Import Firebase storage functions
import "./ReviewModal.css";
import storage from "../firebase.js";

const AddImageModal = ({
  showAddImageModal,
  handleCloseAddImageModal,
  onSaveProfilePic,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadPercent, setUploadPercent] = useState(0);

  const handlePhotoUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const selectedFile = files[0];
      setSelectedImage(selectedFile);
    }
  };

  const handleSaveProfilePic = async () => {
    if (selectedImage) {
      const storageRef = ref(storage, `/files/${selectedImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadPercent(percent);
        },
        (error) => {
          console.error("Error uploading image:", error);
        },
        async () => {
          // Image uploaded successfully, get download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("Download URL:", downloadURL);

          // Pass the download URL to the onSaveProfilePic callback
          onSaveProfilePic(downloadURL);

          // Reset state
          setSelectedImage(null);
          setUploadPercent(0);

          // Close the modal
          handleCloseAddImageModal();
        }
      );
    }
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
              {uploadPercent > 0 ? `Uploading: ${uploadPercent}%` : "Salvează"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddImageModal;
