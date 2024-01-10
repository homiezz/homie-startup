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

export default function RentalDetails() {
  var user = getAuth.currentUser;
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleSaveClick = () => {
    // Toggle the state when the "Salvează" button is clicked
    setIsHeartFilled((prevValue) => !prevValue);
  };
  return (
    <div className="background">
      <div className="overlayContainerRentalDetails">
      <div className="pageContentRentalDetails">
        <div className="title">Apartament in Floreasca</div>
        <div className="rooms">2 adults - 2 rooms - 1 bathroom</div>

        <div className="image-gallery">
          <div className="column">
            <img src="https://c.animaapp.com/6XN1UVYO/img/mask-group-2@2x.png" alt="Image 1" />
          </div>
          <div className="column">
            <img src="https://c.animaapp.com/6XN1UVYO/img/mask-group-2@2x.png" alt="Image 2" />
            <img src="https://c.animaapp.com/6XN1UVYO/img/mask-group-2@2x.png" alt="Image 3" />
          </div>
          <div className="column">
            <img src="https://c.animaapp.com/6XN1UVYO/img/mask-group-2@2x.png" alt="Image 4" />
            <img src="https://c.animaapp.com/6XN1UVYO/img/mask-group-2@2x.png" alt="Image 5" />
          </div>
        </div>
        <div className="reviews-container">
      <div className="reviews-left">
      <img className="reviews-pic" alt="Star" src="https://c.animaapp.com/6XN1UVYO/img/star-1-1.svg" />
      </div>
        <div className="reviews-right">
          <div className="reviews-grade">
            4.23
          </div>
          <div>
            <Link to="/profile" className="link-reviews">
              Vezi review-urile...
            </Link>
          </div>
        </div>

        </div>
        <div className="separator"></div>

        <div className="title">Owner</div>
        <div className="profile-container">
      <div className="profile-left">
        <img className="profile-pic" alt="Gg profile" src="https://c.animaapp.com/6XN1UVYO/img/gg-profile.svg" />
      </div>
        <div className="profile-right">
          <div className="profile-details">
            Postat de <b> George </b> <br />
            Membru din 2023, inchiriaza apartamentul din 2019
          </div>
          <div>
            <Link to="/profile" className="link-profile">
              Vezi profilul...
            </Link>
          </div>
        </div>
      
        </div>

        
        <div className="separator"></div>
        <div className="title">Facilities</div>
        <div className="facilities">
          <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Non curabitur
              gravida arcu ac tortor dignissim. Mattis vulputate enim nulla aliquet porttitor lacus. Auctor elit sed
              vulputate mi sit amet. Mauris rhoncus aenean vel elit scelerisque.
          </div>

          <div className="bullet-list">
            <ul>
              <li>Refrigerator</li>
              <li>Oven</li>
              <li>Washer</li>
              <li>Drier</li>
              <li>Street parking</li>
              <li>IFire alarm</li>
              <li>Refrigerator</li>
              <li>Oven</li>
              <li>Washer</li>
              <li>Drier</li>
              <li>Street parking</li>
              <li>IFire alarm</li>
            </ul>
          </div>
        </div>
        <div className="separator"></div>

        <div className="title">Address</div>
        <div className="address">
        <img
            className="streamline-location"
            alt="Streamline location"
            src="https://c.animaapp.com/6XN1UVYO/img/streamline-location-pin-3-solid.svg"
          />
            <div className="address-text">Strada Lalalal, numarul 21, sector 1</div>
        </div>            
        <div className="separator"></div>

        <div className="title">Rules</div>
        <div className="rules">
          <li className="ruleStyle">
            No pets
          </li>
          <li className="ruleStyle">
            Maybe
          </li>
        </div>
      </div>
      </div>
    </div>
  );
};

