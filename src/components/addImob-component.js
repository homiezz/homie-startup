import React, { useState } from "react";
import "./addImob.css";
import { Button } from "react-bootstrap";
import TrashCan from "../assets/trashCan.png";
import "bootstrap/dist/css/bootstrap.min.css";
import LocationInputMap from "./LocationInputMap";

const AddImob = () => {
  const [imobTitle, setImobTitle] = useState("");
  const [imobDescription, setImobDescription] = useState("");
  const [roomNumber, setRoomNumber] = useState(0);
  const [residentsNumber, setResidentsNumber] = useState(0);
  const [bathroomNumber, setBathroomNumber] = useState(0);
  const [imobFacilities, setImobFacilities] = useState([]);
  const [currentFacility, setCurrentFacility] = useState("");
  const [rules, setRules] = useState([]);
  const [currentRule, setCurrentRule] = useState("");
  const [images, setImages] = useState([]);
  const [imobLocation, setImobLocation] = useState({ lat: 0, lng: 0 });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFacilities = [...imobFacilities];
    const updatedRules = [...rules];

    switch (name) {
      case "setRules":
        updatedRules[index] = value;
        setRules(updatedRules);
        break;
      case "imobFacilities":
        updatedFacilities[index] = value;
        setImobFacilities(updatedFacilities);
        break;
      case "imobTitle":
        if (value && value.length <= 30) {
          setImobTitle(value);
        } else {
          alert(
            "Titlu este prea lung. Va rugam sa oferiti un tilu scurt si descriptiv de maximum 30 de caractere."
          );
        }
        break;
      case "imobDescription":
        if (value && value.length <= 500) {
          setImobDescription(value);
        } else {
          alert(
            "Descrierea este prea lunga. Va rugam sa va incadrati in maximum 500 de caractere."
          );
        }
        break;
      case "roomNumber":
        setRoomNumber(Number(value));
        break;
      case "bathroomNumber":
        setBathroomNumber(Number(value));
        break;
      case "residentsNumber":
        setResidentsNumber(Number(value));
        break;
      case "currentFacility":
        setCurrentFacility(value);
        break;
      case "currentRule":
        setCurrentRule(value);
        break;
      default:
        break;
    }
  };

  const handleAddFacility = () => {
    if (currentFacility.trim() !== "") {
      setImobFacilities([...imobFacilities, currentFacility]);
      setCurrentFacility("");
    } else {
      alert("Va rugam sa adaugati o facilitate.");
    }
  };

  const handleRemoveFacility = (index) => {
    const updatedFacilities = [...imobFacilities];
    updatedFacilities.splice(index, 1);
    setImobFacilities(updatedFacilities);
  };

  const handleAddRules = () => {
    if (currentRule.trim() !== "") {
      setRules([...rules, currentRule]);
      setCurrentRule("");
    } else {
      alert("Va rugam sa adaugati o regula.");
    }
  };

  const handleRemoveRules = (index) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleSaveLocation = (location) => {
    setImobLocation(location);
    console.log(location);
  };

  const handleSubmit = () => {
    if (
      !imobTitle ||
      !imobDescription ||
      !roomNumber ||
      !bathroomNumber ||
      !images ||
      imobLocation.lat === 0 ||
      imobLocation.lng === 0
    ) {
      alert("Va rugam sa completati toate campurile obligatorii!");
      return;
    }

    console.log("Submitting:", {
      imobTitle,
      imobDescription,
      roomNumber,
      bathroomNumber,
      residentsNumber,
      imobFacilities,
      rules,
      images,
      imobLocation,
    });
  };

  return (
    <div className="pageView">
      <form>
        <div className="titleStyle">
          {" "}
          <label>
            <input
              type="text"
              name="imobTitle"
              value={imobTitle}
              placeholder="Titlul imobilului"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <br />
        <label className="formStyle">
          Adauga Imagini:
          <div className="imageList">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            <br />
            {images.map((image, index) => (
              <div key={index} className="imageItem">
                <img
                  src={URL.createObjectURL(image)}
                  alt={""}
                  className="imageStyle"
                />
                <Button
                  type="button"
                  className="buttonStyle deleteButton"
                  onClick={() => handleRemoveImage(index)}
                >
                  <img
                    src={TrashCan}
                    alt="Trash Icon"
                    className="trashIconStyle"
                  />
                </Button>
                <br />
              </div>
            ))}
          </div>
        </label>
        <br />
        <div className="titleStyle">
          {" "}
          <label>
            <textarea
              type="text"
              name="imobDescription"
              value={imobDescription}
              placeholder="Descrierea imobilului..."
              onChange={handleInputChange}
            />
          </label>
        </div>
        <br />
        <div className="formStyle">
          <div className="incrementalItem">
            <Button
              type="button"
              className="buttonStyle"
              onClick={() => {
                if (roomNumber > 0) {
                  setRoomNumber(roomNumber - 1);
                }
              }}
            >
              -
            </Button>
            <span> {roomNumber} </span>
            <Button
              type="button"
              className="buttonStyle"
              onClick={() => {
                setRoomNumber(roomNumber + 1);
              }}
            >
              +
            </Button>
            Camere
          </div>
          <div className="incrementalItem">
            <Button
              type="button"
              className="buttonStyle"
              onClick={() => {
                if (bathroomNumber > 0) {
                  setBathroomNumber(bathroomNumber - 1);
                }
              }}
            >
              <div className="incrementalItem">-</div>
            </Button>
            <span> {bathroomNumber} </span>
            <Button
              type="button"
              className="buttonStyle"
              onClick={() => {
                setBathroomNumber(bathroomNumber + 1);
              }}
            >
              +
            </Button>
            Bai
          </div>
          <div className="incrementalItem">
            <Button
              type="button"
              className="buttonStyle"
              onClick={() => {
                if (residentsNumber > 0) {
                  setResidentsNumber(residentsNumber - 1);
                }
              }}
            >
              -
            </Button>
            <span> {residentsNumber} </span>
            <Button
              type="button"
              className="buttonStyle"
              onClick={() => {
                setResidentsNumber(residentsNumber + 1);
              }}
            >
              +
            </Button>
            Rezidenti
          </div>
        </div>
        <br />
        <label className="formStyle">
          Facilitati:
          <div className="facilityInputContainer">
            {" "}
            <input
              type="text"
              name="currentFacility"
              placeholder="Adauga facilitati..."
              value={currentFacility}
              onChange={(e) => handleInputChange(e, 0)}
            />
            <Button
              type="button"
              className="buttonStyle"
              onClick={handleAddFacility}
            >
              +
            </Button>
          </div>
          {imobFacilities.length > 0 && (
            <div className="facilitiesList">
              {" "}
              {imobFacilities.map((facility, index) => (
                <div key={index} className="facilityItem">
                  {" "}
                  <Button
                    type="button"
                    className="buttonStyle"
                    onClick={() => handleRemoveFacility(index)}
                  >
                    <img
                      src={TrashCan}
                      alt="Trash Icon"
                      className="trashIconStyle"
                    />
                  </Button>
                  <span>{facility}</span>
                </div>
              ))}
            </div>
          )}
        </label>
        <br />
        <label className="formStyle">
          Reguli:
          <div className="facilityInputContainer">
            {" "}
            <input
              type="text"
              name="currentRule"
              placeholder="Adauga reguli..."
              value={currentRule}
              onChange={(e) => handleInputChange(e, 0)}
            />
            <Button
              type="button"
              className="buttonStyle"
              onClick={handleAddRules}
            >
              +
            </Button>
          </div>
          {rules.length > 0 && (
            <div className="facilitiesList">
              {rules.map((rule, index) => (
                <div key={index} className="facilityItem">
                  <Button
                    type="button"
                    className="buttonStyle"
                    onClick={() => handleRemoveRules(index)}
                  >
                    <img
                      src={TrashCan}
                      alt="Trash Icon"
                      className="trashIconStyle"
                    />
                  </Button>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          )}
        </label>
        <br />
        <div>
          Location
          <LocationInputMap onSaveLocation={handleSaveLocation} />
        </div>
        <br />
        <div className="nav-item">
          <Button type="button" className="buttonStyle" onClick={handleSubmit}>
            Adauga
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddImob;
