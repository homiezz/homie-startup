import React, { useState } from "react";
import "./addImob.css";
import { Button } from "react-bootstrap";
import TrashCan from "../assets/trashCan.png";
import "bootstrap/dist/css/bootstrap.min.css";

const AddImob = () => {
  const [imobTitle, setImobTitle] = useState("");
  const [imobDescription, setImobDescription] = useState("");
  const [roomNumber, setRoomNumber] = useState(0);
  const [residentsNumber, setResidentsNumber] = useState(0);
  const [bathroomNumber, setBathroomNumber] = useState(0);
  const [imobFacilities, setImobFacilities] = useState([]);
  const [rules, setRules] = useState([]);
  const [images, setImages] = useState([]);

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
        setImobTitle(value);
        break;
      case "imobDescription":
        setImobDescription(value);
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
      default:
        break;
    }
  };

  const handleAddFacility = () => {
    setImobFacilities([...imobFacilities, ""]);
  };

  const handleRemoveFacility = (index) => {
    const updatedFacilities = [...imobFacilities];
    updatedFacilities.splice(index, 1);
    setImobFacilities(updatedFacilities);
  };

  const handleAddRules = () => {
    setRules([...rules, ""]);
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

  const handleSubmit = () => {
    if (!imobTitle || !imobDescription || !roomNumber || !bathroomNumber) {
      alert("Please fill in all required fields");
      return;
    }

    console.log("Submitting:", {
      imobTitle,
      imobDescription,
      roomNumber,
      bathroomNumber,
      imobFacilities,
      images,
    });
  };

  return (
    <div className="pageView">
      <form>
        <div className="formStyle">
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
        <div className="formStyle">
          <label>
            <textarea
              name="imobDescription"
              value={imobDescription}
              placeholder="Descriere imobil"
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
          <div>
            <input
              type="text"
              name="imobFacilities"
              placeholder="Adauga facilitati..."
              value={imobFacilities[0] || ""}
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
            <div>
              {imobFacilities.map((facility, index) => (
                <div key={index}>
                  <span>{facility}</span>
                  {index === imobFacilities.length - 1 && (
                    <Button
                      type="button"
                      className="buttonStyle"
                      onClick={() => handleRemoveFacility(index)}
                    >
                      <img
                        src={TrashCan}
                        alt="Trash Icon"
                        className="imageStyle"
                      />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}
        </label>
        <br />
        <label className="formStyle">
          Reguli:
          {rules.length > 0 ? (
            rules.map((rule, index) => (
              <div key={index}>
                <input
                  type="text"
                  name="rules"
                  value={rule}
                  onChange={(e) => handleInputChange(e, index)}
                />
                {rules.length > 1 && (
                  <Button
                    type="button"
                    className="buttonStyle"
                    onClick={() => handleRemoveRules(index)}
                  >
                    <img
                      src={TrashCan}
                      alt="Trash Icon"
                      className="imageStyle"
                    />
                  </Button>
                )}
                {index === rules.length - 1 && (
                  <Button
                    type="button"
                    className="buttonStyle"
                    onClick={handleAddRules}
                  >
                    +
                  </Button>
                )}
                <br />
              </div>
            ))
          ) : (
            <div>
              <input
                type="text"
                name="rules"
                value={rules[0] || ""} // Use the first element if available, otherwise an empty string
                onChange={(e) => handleInputChange(e, 0)}
              />
              {rules.length === 0 && (
                <Button
                  type="button"
                  className="buttonStyle"
                  onClick={handleAddRules}
                >
                  +
                </Button>
              )}
              <br />
            </div>
          )}
        </label>
        <br />
        <label className="formStyle">
          Adauga Imagini:
          <div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            <br />
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={URL.createObjectURL(image)}
                  alt={""}
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
                <Button
                  type="button"
                  className="buttonStyle"
                  onClick={() => handleRemoveImage(index)}
                >
                  <img src={TrashCan} alt="Trash Icon" className="imageStyle" />
                </Button>
                <br />
              </div>
            ))}
          </div>
        </label>
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
