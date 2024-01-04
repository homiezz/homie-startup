import React, { useState } from "react";
import "../App.css";
import { Button } from "react-bootstrap";

const AddImob = () => {
  const [imobTitle, setImobTitle] = useState("");
  const [imobDescription, setImobDescription] = useState("");
  const [roomNumber, setRoomNumber] = useState(0);
  const [bathroomNumber, setBathroomNumber] = useState(0);
  const [imobFacilities, setImobFacilities] = useState([]);
  const [images, setImages] = useState([]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;

    if (name === "imobFacilities") {
      const updatedFacilities = [...imobFacilities];
      updatedFacilities[index] = value;
      setImobFacilities(updatedFacilities);
    } else {
      switch (name) {
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
        default:
          break;
      }
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form>
        <label className="nav-item">
          Imob Title:
          <input
            type="text"
            name="imobTitle"
            value={imobTitle}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="nav-item">
          Imob Description:
          <textarea
            name="imobDescription"
            value={imobDescription}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="nav-item">
          Room Number:
          <input
            type="number"
            name="roomNumber"
            value={roomNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="nav-item">
          Bathroom Number:
          <input
            type="number"
            name="bathroomNumber"
            value={bathroomNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="nav-item">
          Imob Facilities:
          {imobFacilities.length > 0 ? (
            imobFacilities.map((facility, index) => (
              <div key={index}>
                <input
                  type="text"
                  name="imobFacilities"
                  value={facility}
                  onChange={(e) => handleInputChange(e, index)}
                />
                {imobFacilities.length > 1 && (
                  <Button
                    type="button"
                    onClick={() => handleRemoveFacility(index)}
                  >
                    Remove
                  </Button>
                )}
                {index === imobFacilities.length - 1 && (
                  <Button type="button" onClick={handleAddFacility}>
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
                name="imobFacilities"
                value={imobFacilities[0] || ""} // Use the first element if available, otherwise an empty string
                onChange={(e) => handleInputChange(e, 0)}
              />
              {imobFacilities.length === 0 && (
                <Button type="button" onClick={handleAddFacility}>
                  +
                </Button>
              )}
              <br />
            </div>
          )}
        </label>
        <br />
        <label className="nav-item">
          Upload Images:
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
                <Button type="button" onClick={() => handleRemoveImage(index)}>
                  Remove
                </Button>
                <br />
              </div>
            ))}
          </div>
        </label>
        <br />
        <div className="nav-item">
          <Button type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddImob;
