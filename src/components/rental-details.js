import "./RentalDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link, useMatch } from "react-router-dom";
import LocationInputMap from "./LocationInputMap";
import ReviewModal from "./review-component";
import AddImageModal from "./addImage-component";
import { Button } from "react-bootstrap";
import { getAuth } from "firebase/auth";
import axios from "axios";
import config from "../config";

export const RentalDetails = () => {
  var user = getAuth.currentUser;
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  // ... rest of the component

  const handleSaveClick = () => {
    // Toggle the state when the "Salvează" button is clicked
    setIsHeartFilled((prevValue) => !prevValue);
  };
  return (
    <div className="rental-details">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            className="background"
            alt="Background"
            src="https://c.animaapp.com/6XN1UVYO/img/background-gradientartboard-1-2.png"
          />
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/6XN1UVYO/img/rectangle-19.svg" />
          <p className="text-wrapper">2 adults - 2 rooms - 1 bathroom</p>
          <img className="mask-group" alt="Mask group" src="https://c.animaapp.com/6XN1UVYO/img/mask-group-4.png" />
          <img className="img" alt="Mask group" src="https://c.animaapp.com/6XN1UVYO/img/mask-group-3@2x.png" />
          <img
            className="mask-group-2"
            alt="Mask group"
            src="https://c.animaapp.com/6XN1UVYO/img/mask-group-2@2x.png"
          />
          <img
            className="mask-group-3"
            alt="Mask group"
            src="https://c.animaapp.com/6XN1UVYO/img/mask-group-3@2x.png"
          />
          <img
            className="mask-group-4"
            alt="Mask group"
            src="https://c.animaapp.com/6XN1UVYO/img/mask-group-2@2x.png"
          />
          <div className="div">Apartament in Floreasca</div>
          <img
            className="ep-arrow-left"
            alt="Ep arrow left"
            src="https://c.animaapp.com/6XN1UVYO/img/ep-arrow-left.svg"
          />
          <img className="line" alt="Line" src="https://c.animaapp.com/6XN1UVYO/img/line-1.svg" />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/6XN1UVYO/img/line-2.svg" />
          <img className="line-3" alt="Line" src="https://c.animaapp.com/6XN1UVYO/img/line-2.svg" />
          <img className="line-4" alt="Line" src="https://c.animaapp.com/6XN1UVYO/img/line-2.svg" />
          <div className="group">
            <div className="text-wrapper-2">Descriere</div>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Non curabitur
              gravida arcu ac tortor dignissim. Mattis vulputate enim nulla aliquet porttitor lacus. Auctor elit sed
              vulputate mi sit amet. Mauris rhoncus aenean vel elit scelerisque.
            </p>
            <div className="refrigerator-oven">
              Refrigerator
              <br />
              Oven
              <br />
              Washer
              <br />
              Drier
              <br />
              Street parking
              <br />
              Fire alarm
            </div>
            <div className="refrigerator-oven-2">
              Refrigerator
              <br />
              Oven
              <br />
              Washer
              <br />
              Drier
              <br />
              Street parking
              <br />
              Fire alarm
            </div>
          </div>
          <div className="group-2">
            <p className="text-wrapper-3">Strada Lalalal, numarul 21, sector 1</p>
            <div className="text-wrapper-4">Adresă</div>
            <img
              className="streamline-location"
              alt="Streamline location"
              src="https://c.animaapp.com/6XN1UVYO/img/streamline-location-pin-3-solid.svg"
            />
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="formFieldTitle">
                  <LocationInputMap />
                </div>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-2">
              {/* <div className="text-wrapper-6">Reviews...</div> */}
              <div className="group-3">
                <div className="text-wrapper-7">4.23</div>
                <div className="label">Reviews...</div>
                <div className="text-wrapper-8" onClick={handleSaveClick}>
                  {isHeartFilled ? "Adăugat la favorite" : "Adaugă la favorite"}
                </div>
                <img className="star" alt="Star" src="https://c.animaapp.com/6XN1UVYO/img/star-1-1.svg" />
              </div>
            </div>
          </div>
          <div className="group-4">
            <div className="text-wrapper-9">Regulile casei</div>
            <div className="rules">
              Pets are allowed
              <br />
              ?????
              <br />
              ???????
            </div>
          </div>
          <div className="group-5">
            <div className="overlap-3">
              <div className="overlap-4">
                <p className="hosted-by-george">
                  <span className="span">Postat de </span>
                  <span className="text-wrapper-10">George</span>
                </p>
                <p className="text-wrapper-11">Member since 2023, rents the apartment since 2019</p>
                <div className="text-wrapper-12">
                  <Link to="/profile">
                    Vezi profilul...
                  </Link>
                </div>
                <img className="gg-profile" alt="Gg profile" src="https://c.animaapp.com/6XN1UVYO/img/gg-profile.svg" />
                <div className="group-6">
                  <div className="text-wrapper-13">Proprietar</div>
                  <div className="group-7">
                    <div className="text-wrapper-14">4.71</div>
                    <img className="star-2" alt="Star" src="https://c.animaapp.com/6XN1UVYO/img/star-1.svg" />
                  </div>
                </div>
              </div>
              <div className="group-8">
                <div className="overlap-group-2">
                  <div className="text-wrapper-15">Contact</div>
                  <div className="rectangle-2" />
                </div>
              </div>
            </div>
          </div>
          <img onClick={handleSaveClick}
            className={isHeartFilled ? "mdi-heart" : "mdi-heart"}
            alt="Mdi heart"
            src={isHeartFilled ? "https://c.animaapp.com/8trPh2B7/img/vector.svg" : "https://c.animaapp.com/J38zkBpS/img/vector.svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;
