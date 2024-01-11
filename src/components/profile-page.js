import "./ProfilePage.css";
import React, { useState, useEffect } from "react";
import ReviewModal from "./review-component";
import AddImageModal from "./addImage-component";
import { Button } from "react-bootstrap";
import { getAuth } from "firebase/auth";
import axios from "axios";
import config from "../config";
import PostCard from './posts-component';

export const ProfilePage = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showAddImageModal, setShowAddImageModal] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [isEditingInterests, setIsEditingInterests] = useState(false);

  const [userName, setUserName] = useState("You");
  const [interests, setInterests] = useState("Ce interese ai?");
  const [description, setDescription] = useState(
    "Zi-ne cate ceva despre tine."
  );
  const [profilePic, setProfilePic] = useState(
    "https://c.animaapp.com/3A91v25w/img/group@2x.png"
  );
  const [userData, setUserData] = useState({
    userName: "You",
    interests: "Ce interese ai?",
    description: "Zi-ne cate ceva despre tine.",
    profilePic: "https://c.animaapp.com/3A91v25w/img/group@2x.png",
  });

  const handleOpenReviewModal = () => {
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setShowReviewModal(false);
  };

  const fetchUserData = async () => {
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
      setUserData(response.data);
      console.log("Received:", userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const updateUser = async (updatedData) => {
    try {
      console.log("Inside updateUser function");
      const user = getAuth().currentUser;
      console.log("USER:", user);
      const idToken = await user.getIdToken();

      if (!idToken) {
        console.error("ID token not found");
        return;
      }

      console.log("Updating user data with:", updatedData);

      const response = await axios.put(
        `${config.backendApiUrl}/api/update-user-data`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );

      console.log("Update response:", response.data);

      // After updating, fetch the user data again
      fetchUserData();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };


  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      setUserName(userData.userName || userName);
      setInterests(userData.interests || interests);
      setDescription(userData.description || description);
      setProfilePic(userData.profilePic || profilePic);
    }
  }, [userData]);

  const handlePenClick = () => {
    setShowAddImageModal(true);
  };

  const handleEditDescription = () => {
    setIsEditingDescription(true);
  };

  const handleSaveDescription = () => {
    setIsEditingDescription(false);
    const updatedData = { ...userData, description: description };
    console.log("Updated data:", updatedData);
    updateUser(updatedData);
  };

  const handleEditInterests = () => {
    setIsEditingInterests(true);
  };

  const handleSaveInterests = () => {
    setIsEditingInterests(false);
    // Use a function argument in setUserData to ensure the correct order of updates
    const updatedData = { ...userData, interests: interests };
    console.log("Updated data:", updatedData);
    updateUser(updatedData);
  };

  const handleCloseAddImageModal = () => {
    setShowAddImageModal(false);
  };

  const handleSaveProfilePic = (selectedImage) => {
    if (selectedImage) {
      setProfilePic(selectedImage);
      const updatedData = { ...userData, profilePic: selectedImage };
      console.log("Updated data:", updatedData);
      updateUser(updatedData);
    }
  };

  return (
    <div className="profile-page-container">
      <div className="profileOverlay">
        <div className="profile-pic-container">
          <img className="profile-pic-profile" alt="Gg profile" src="https://c.animaapp.com/6XN1UVYO/img/gg-profile.svg" />
        </div>
        <div className="reviews-container-profile">
          <img className="reviews-pic-profile" alt="Star" src="https://c.animaapp.com/6XN1UVYO/img/star-1-1.svg" />
          <div className="reviews-right-profile">
            <div className="reviews-grade-profile">
              4.23
            </div>
            <div className="reviews-no">
              from <b> 12 reviews</b>
            </div>
          </div>
          
        </div>
        <div className="separator"></div>
        <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sit amet volutpat consequat mauris nunc congue nisi vitae
                  suscipit. Non curabitur gravida arcu ac tortor dignissim.
                  Mattis vulputate enim nulla aliquet porttitor lacus....
        </div>
      </div>
      <div className="profile-info-container">
        <div className="title">
          About George
        </div>
        <div className="separator"></div>
        <div className="secondary-title">
          Reviews
        </div>
        <div className="reviews-list-container">
          <div className="reviews-list-item">
            <p className="review-content">   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sit amet volutpat consequat mauris nunc congue nisi vitae
                  suscipit. Non curabitur gravida arcu ac tortor dignissim.
                  Mattis vulputate enim nulla aliquet porttitor lacus....l</p>
            <div className="rating">
              4.5
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="secondary-title">
          Listings
        </div>
        <div className="post">
       
        </div>

      </div>
    </div>  
  );
};

export default ProfilePage;

