import "./ProfilePage.css";
import React, { useState, useEffect } from "react";
import ReviewModal from "./review-component";
import AddImageModal from "./addImage-component";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import config from "../config";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

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

  const navigate = useNavigate();

  const handleOpenReviewModal = () => {
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setShowReviewModal(false);
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `${config.backendApiUrl}/api/user-data`,
        {
          withCredentials: true,
        }
      );
      setUserData(response.data);
      console.log("User data:", response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const updateUser = async (updatedData) => {
    try {
      const response = await axios.put(
        `${config.backendApiUrl}/api/update-user-data`,
        updatedData,
        { withCredentials: true }
      );

      console.log("Update response:", response.data);

      // After updating, fetch the user data again
      fetchUserData();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  useEffect(() => {
    if (Cookies.get("idToken") === undefined) {
      navigate("/homie-startup");
    } else {
      fetchUserData();
    }
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

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      Cookies.remove("idToken");
      await signOut(auth);
      navigate("/homie-startup");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="tenants-profile">
      <ReviewModal
        showReviewModal={showReviewModal}
        handleCloseReviewModal={handleCloseReviewModal}
      />
      <AddImageModal
        showAddImageModal={showAddImageModal}
        handleCloseAddImageModal={handleCloseAddImageModal}
        onSaveProfilePic={handleSaveProfilePic}
      />
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            className="background"
            alt="Background"
            src="https://c.animaapp.com/3A91v25w/img/background-gradientartboard-1-2.png"
          />
          <img
            className="rectangle"
            alt="Rectangle"
            src="https://c.animaapp.com/3A91v25w/img/rectangle-19.svg"
          />
          <div className="div" />
          <div className="group">
            <label htmlFor="profilePicInput" className="img-container">
              <img className="img" alt="Group" src={userData.profilePic} />
              <Button className="buttonStyle" onClick={handlePenClick}>
                🖊️
              </Button>
            </label>
            <div className="group-2">
              <div className="overlap-group">
                <div className="text-wrapper">from</div>
                <div className="text-wrapper-2">4.23</div>
              </div>
              <div className="text-wrapper-3">12 reviews</div>
              <img
                className="star"
                alt="Star"
                src="https://c.animaapp.com/3A91v25w/img/star-1-3.svg"
              />
            </div>
          </div>
          <p className="about-you">
            <span className="span">Despre</span>
            <span className="text-wrapper-4">&nbsp;</span>
            <span className="text-wrapper-5">{userData.userName}</span>
          </p>
          <div className="p">
            {isEditingDescription ? (
              <>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Button
                  type="button"
                  className="buttonStyle"
                  onClick={handleSaveDescription}
                >
                  Salveaza
                </Button>
              </>
            ) : (
              <>
                <p className="description">{userData.description}</p>
                <Button
                  type="button"
                  className="buttonStyle"
                  onClick={handleEditDescription}
                >
                  🖊️
                </Button>
              </>
            )}
          </div>

          <div className="looking-for-a">
            {isEditingInterests ? (
              <>
                <input
                  type="text"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                />
                <Button
                  type="button"
                  className="buttonStyle"
                  onClick={handleSaveInterests}
                >
                  Salveaza
                </Button>
              </>
            ) : (
              <>
                <p className="description">{userData.interests}</p>
                <Button
                  type="button"
                  className="buttonStyle"
                  onClick={handleEditInterests}
                >
                  🖊️
                </Button>
              </>
            )}
          </div>
          <p className="member-for-years">
            <span className="span">member for </span>
            <span className="text-wrapper-6">2 years</span>
          </p>
          <img
            className="line"
            alt="Line"
            src="https://c.animaapp.com/3A91v25w/img/line-1.svg"
          />
          <img
            className="line-2"
            alt="Line"
            src="https://c.animaapp.com/3A91v25w/img/line-2.svg"
          />
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-7">Verified user</div>
              <img
                className="vector"
                alt="Vector"
                src="https://c.animaapp.com/3A91v25w/img/vector.svg"
              />
            </div>
          </div>
          <div className="text-wrapper-8">Reviews</div>
          <img
            className="line-3"
            alt="Line"
            src="https://c.animaapp.com/3A91v25w/img/line-1.svg"
          />
          <div className="text-wrapper-9">Interese</div>
          <div className="div-wrapper">
            <div className="overlap-3">
              <div className="group-3">
                <div className="text-wrapper-10">4.5</div>
                <img
                  className="star-2"
                  alt="Star"
                  src="https://c.animaapp.com/3A91v25w/img/star-1-2.svg"
                />
              </div>
              <p className="text-wrapper-11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
                amet volutpat consequat mauris nunc congue nisi vitae suscipit.
                Non curabitur gravida arcu ac tortor dignissim. Mattis vulputate
                enim nulla aliquet porttitor lacus....
              </p>
            </div>
          </div>
          <div className="group-4">
            <div className="overlap-4">
              <div className="group-3">
                <div className="text-wrapper-10">4.5</div>
                <img
                  className="star-2"
                  alt="Star"
                  src="https://c.animaapp.com/3A91v25w/img/star-1-2.svg"
                />
              </div>
              <p className="text-wrapper-11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
                amet volutpat consequat mauris nunc congue nisi vitae suscipit.
                Non curabitur gravida arcu ac tortor dignissim. Mattis vulputate
                enim nulla aliquet porttitor lacus....
              </p>
            </div>
            <div className="group-5">
              <div className="overlap-group-2">
                <div className="group-3">
                  <div className="text-wrapper-10">4.5</div>
                  <img
                    className="star-2"
                    alt="Star"
                    src="https://c.animaapp.com/3A91v25w/img/star-1-2.svg"
                  />
                </div>
                <p className="text-wrapper-11">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sit amet volutpat consequat mauris nunc congue nisi vitae
                  suscipit. Non curabitur gravida arcu ac tortor dignissim.
                  Mattis vulputate enim nulla aliquet porttitor lacus....
                </p>
              </div>
            </div>
          </div>
          <img
            className="ep-arrow-left"
            alt="Ep arrow left"
            src="https://c.animaapp.com/3A91v25w/img/ep-arrow-left.svg"
          />
          <div className="group-6" onClick={handleOpenReviewModal}>
            <div className="overlap-5">
              <div className="text-wrapper-12">Adaugă o recenzie</div>
              <div className="rectangle-2" />
            </div>
            <Button variant="link" onClick={handleLogout}>
              Deconectare
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
