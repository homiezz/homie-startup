import "./ProfilePage.css";
import React, { useState } from "react";
import ReviewModal from "./review-component";
import AddImageModal from "./addImage-component";
import { Button } from "react-bootstrap";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import axios from "axios";
import config from "../config";

export const ProfilePage = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);

  const [userName, setUserName] = useState("You");
  const [userData, setUserData] = useState([]);

  const [profilePic, setProfilePic] = useState(
    "https://c.animaapp.com/3A91v25w/img/group@2x.png"
  );
  const [showAddImageModal, setShowAddImageModal] = useState(false);


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
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData && userData.name !== undefined) {
      setUserName(userData.name || "You");
    } else {
      setUserName("You");
    }
  }, [userData]);

  const handlePenClick = () => {
    setShowAddImageModal(true);
  };

  const handleCloseAddImageModal = () => {
    setShowAddImageModal(false);
  };

  const handleSaveProfilePic = (selectedImage) => {
    // Logic to fetch the updated profile pic URL from your data source
    if (selectedImage) {
      console.log(selectedImage);
      setProfilePic(selectedImage);
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
              <img className="img" alt="Group" src={profilePic} />
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
            <span className="span">About</span>
            <span className="text-wrapper-4">&nbsp;</span>
            <p className="text-wrapper-5">{userName}</p>
          </p>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            volutpat consequat mauris nunc congue nisi vitae suscipit. Non
            curabitur gravida arcu ac tortor dignissim. Mattis vulputate enim
            nulla aliquet porttitor lacus.
          </p>
          <p className="looking-for-a">
            Looking for a 2 rooms apartment, in the center of Bucharest, to
            share with my girlfriend
            <br />
            Owns a cat, so needs a pet-friendly rental
          </p>
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
          <div className="text-wrapper-9">Interest</div>
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
          <div className="group-6">
            <Button variant="link" onClick={handleOpenReviewModal}>
              Adaugă o recenzie
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
