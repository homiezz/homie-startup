import React, { useState } from "react";
import { Modal, Form, Button, Tab, Tabs } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./ReviewModal.css";

const CustomRating = ({ value, onChange }) => {
  return (
    <Rating
      name="custom-rating"
      value={value}
      precision={1}
      onChange={(event, newValue) => onChange(newValue)}
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
      icon={<StarIcon fontSize="inherit" />}
    />
  );
};

const ReviewModal = ({ showReviewModal, handleCloseReviewModal }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handleRatingChange = (newValue) => {
    setRating(newValue);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handlePhotoUpload = (event) => {
    //TODO: logic to handle the uploaded photos
    const files = event.target.files;
  };

  const handleSaveReview = () => {
    // TODO: logic to save the review, including the rating, reviewText, and uploadedPhotos
    handleCloseReviewModal();
  };

  return (
    <Modal
      className="custom-modal"
      show={showReviewModal}
      onHide={handleCloseReviewModal}
      centered
    >
      <Modal.Body className="modal-body">
        <Form>
          <Form.Group className="modal-field" controlId="formRating">
            <Form.Label>Notă:</Form.Label>
            <CustomRating value={rating} onChange={handleRatingChange} />
          </Form.Group>
          <Form.Group className="modal-field" controlId="formReviewText">
            <Form.Label>Lasă-ne detalii despre experiența ta:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Scrie aici..."
              value={reviewText}
              onChange={handleReviewTextChange}
            />
          </Form.Group>
          <Form.Group className="modal-field" controlId="formPhotoUpload">
            <Form.Label>Incarcă poze:</Form.Label>
            <CloudUploadIcon style={{ marginLeft: "5px" }} />
            <Form.Control
              type="file"
              multiple
              accept="image/*"
              onChange={handlePhotoUpload}
            />
            <small className="text-muted">
              Dimensiune maximă per fișier este de 5MB
            </small>
          </Form.Group>
          <div className="submit-form-button-container">
            <Button
              className="submit-form-button"
              type="button"
              onClick={handleSaveReview}
            >
              Salvează
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ReviewModal;
