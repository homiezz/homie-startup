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
  const [ownerRating, setOwnerRating] = useState(0);
  const [apRating, setApRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handleOwnerRatingChange = (newValue) => {
    setOwnerRating(newValue);
  };

  const handleApRatingChange = (newValue) => {
    setApRating(newValue);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const calculateRating = () => {
    const rating = (ownerRating + apRating) / 2;
    return rating;
  }

  const handlePhotoUpload = (event) => {
    //TODO: logic to handle the uploaded photos
    const files = event.target.files;
  };

  const handleSaveReview = () => {
    // TODO: logic to save the review, including the rating, reviewText, and uploadedPhotos
    console.log(`Rating owner: ${ownerRating}`);
    console.log(`Rating imobil: ${apRating}`);
    console.log(`Review text provided by the user: ${reviewText}`);
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
          <Form.Group className="modal-field" controlId="formRatingP">
            <Form.Label>Notă proprietar:</Form.Label>
            <CustomRating value={ownerRating} onChange={handleOwnerRatingChange} />
          </Form.Group>
          <Form.Group className="modal-field" controlId="formRatingI">
            <Form.Label>Notă imobil:</Form.Label>
            <CustomRating value={apRating} onChange={handleApRatingChange} />
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
