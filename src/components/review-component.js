import React, { useState } from "react";
import { Modal, Form, Button, Tab, Tabs } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./ReviewModal.css";
import axios from "axios";
import config from "../config";
import { getAuth } from "firebase/auth";
import storage from "../firebase.js"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getDate, generateId } from './helpers.js'
import toast, { Toaster } from 'react-hot-toast';

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

  const getUserUID = async () => {
    try {
      const user = getAuth().currentUser;
      const idToken = await user.getIdToken();

      if (!idToken) {
        console.error("ID token not found");
        return;
      }

      const response = await axios.get(
        `${config.backendApiUrl}/api/user-data`,
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );
      return response.data.uid;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
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
    const files = Array.from(event.target.files);
    setUploadedPhotos(files);
  };

  const handleSaveReview = async () => {
    const uploadedPhotoUrls = [];

    for (const file of uploadedPhotos) {
      // Create a reference to the storage bucket location
      const fileRef = ref(storage, `user_uploads/${getUserUID()}/${file.name}`);
  
      // Start the upload
      const uploadTask = uploadBytesResumable(fileRef, file);
  
      // Wait for the upload to complete
      await new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Handle progress updates if you wish
          },
          (error) => {
            // Handle unsuccessful uploads
            console.error(error);
            reject(error);
          },
          async () => {
            // Handle successful uploads on complete
            try {
              const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
              uploadedPhotoUrls.push(downloadUrl);
              resolve(downloadUrl);
            } catch (error) {
              console.error(error);
              reject(error);
            }
          }
        );
      });
    }
  
    // TODO: logic to save the review, including the rating, reviewText, and uploadedPhotos
    console.log(`Date: ${getDate()}`);
    console.log(`Description: ${reviewText}`);
    console.log(`Id: ${generateId()}`);
    console.log(`Rating ${calculateRating()}`);
    console.log(`User id ${await getUserUID()}`)
    //post id: hhfi2891d
    for(const url of uploadedPhotoUrls) {
      console.log(url);
    }

    try {
      const reviewData = {
        id: generateId(),
        date: getDate(),
        description: reviewText,
        images: uploadedPhotoUrls,
        uid: await getUserUID(),
        rating: calculateRating(), 
        post_id: "hhfi2891d"// hardcoded pana e gata Rental Details  
      };

      const response = await axios.post(
        `${config.backendApiUrl}/api/reviews`,
        reviewData,
        { useCredentials: true }
      );

      console.log("Review submitted successfully:", response.data);
      toast.success("Recenzia a fost adaugata cu succes");
    } catch (error) {
      console.error("Error submitting post:", error);
      toast.error("Eroare la adaugarea recenziei.");
    }

    handleCloseReviewModal();
  };

  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
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
    </>
  );
};

export default ReviewModal;
