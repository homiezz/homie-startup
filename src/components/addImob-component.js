import React, { useEffect, useState } from "react";
import "./addImob.css";
import { Button } from "react-bootstrap";
import TrashCan from "../assets/white-bin.png";
import "bootstrap/dist/css/bootstrap.min.css";
import LocationInputMap from "./LocationInputMap";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AddImob = () => {
  const [title, setImobTitle] = useState("");
  const [description, setImobDescription] = useState("");
  const [rooms, setRoomNumber] = useState(0);
  const [residents, setResidentsNumber] = useState(0);
  const [bathrooms, setBathroomNumber] = useState(0);
  const [facilities, setImobFacilities] = useState([]);
  const [currentFacility, setCurrentFacility] = useState("");
  const [rules, setRules] = useState([]);
  const [currentRule, setCurrentRule] = useState("");
  const [images, setImages] = useState([]);
  const [imobLocation, setImobLocation] = useState({ lat: 0, lng: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("idToken") === undefined) {
      navigate("/homie-startup");
    } else {
      //
    }
  }, []);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFacilities = [...facilities];
    const updatedRules = [...rules];

    switch (name) {
      case "setRules":
        updatedRules[index] = value;
        setRules(updatedRules);
        break;
      case "facilities":
        updatedFacilities[index] = value;
        setImobFacilities(updatedFacilities);
        break;
      case "title":
        if (value && value.length <= 30) {
          setImobTitle(value);
        } else {
          alert(
            "Titlu este prea lung. Va rugam sa oferiti un tilu scurt si descriptiv de maximum 30 de caractere."
          );
        }
        break;
      case "description":
        if (value && value.length <= 500) {
          setImobDescription(value);
        } else {
          alert(
            "Descrierea este prea lunga. Va rugam sa va incadrati in maximum 500 de caractere."
          );
        }
        break;
      case "rooms":
        setRoomNumber(Number(value));
        break;
      case "bathrooms":
        setBathroomNumber(Number(value));
        break;
      case "residents":
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
      setImobFacilities([...facilities, currentFacility]);
      setCurrentFacility("");
    } else {
      alert("Va rugam sa adaugati o facilitate.");
    }
  };

  const handleRemoveFacility = (index) => {
    const updatedFacilities = [...facilities];
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

  const fetchUserData = async () => {
    try {
      const user = getAuth().currentUser;
      const idToken = await user.getIdToken();
      setToken(idToken);

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
      console.log("uid", userData.uid);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = async () => {
    if (
      !title ||
      !description ||
      !rooms ||
      !bathrooms ||
      !images ||
      address.lat === 0 ||
      address.lng === 0
    ) {
      alert("Va rugam sa completati toate campurile obligatorii!");
      return;
    }

    try {
      const author_uid = userData.uid;
      console.log("uid", author_uid);

      const postData = {
        title,
        description,
        rooms,
        bathrooms,
        residents,
        facilities,
        rules,
        images,
        address,
        author_uid,
      };

      const response = await axios.post(
        `${config.backendApiUrl}/api/posts`,
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Post submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <div className="pageView">
      <div className="formContainer">
        <form className="formStyle">
          <label className="formStyle">
            <div className="formFieldTitle"> Titlu: </div>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Titlul imobilului"
              onChange={handleInputChange}
              className="titleField"
            />
          </label>

          <label className="formStyle">
            <div className="formFieldTitle"> Imagini: </div>
            <div className="imageList">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
              {images.map((image, index) => (
                <div key={index} className="imageItem">
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="imageStyleImob"
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
                </div>
              ))}
            </div>
          </label>

          {/* Description Textarea */}

          <label className="formStyle">
            <div className="formFieldTitle"> Descriere: </div>

            <textarea
              type="text"
              name="description"
              value={description}
              placeholder="Descrierea imobilului..."
              onChange={handleInputChange}
            />
          </label>

          <div className="formStyle">
            <div className="incrementalWrapper">
              <div className="incrementalItem">
                <Button
                  type="button"
                  className="buttonStyle"
                  onClick={() => {
                    if (rooms > 0) {
                      setRoomNumber(rooms - 1);
                    }
                  }}
                >
                  -
                </Button>
                <div className="number"> {rooms} </div>
                <Button
                  type="button"
                  className="buttonStyle"
                  onClick={() => {
                    setRoomNumber(rooms + 1);
                  }}
                >
                  +
                </Button>
                <div className="roomNo"> Camere </div>
              </div>
              <div className="incrementalItem">
                <Button
                  type="button"
                  className="buttonStyle"
                  onClick={() => {
                    if (bathrooms > 0) {
                      setBathroomNumber(bathrooms - 1);
                    }
                  }}
                >
                  <div className="incrementalItem">-</div>
                </Button>
                <div className="number"> {bathrooms} </div>
                <Button
                  type="button"
                  className="buttonStyle"
                  onClick={() => {
                    setBathroomNumber(bathrooms + 1);
                  }}
                >
                  +
                </Button>
                <div className="roomNo"> Bai </div>
              </div>
              <div className="incrementalItem">
                <Button
                  type="button"
                  className="buttonStyle"
                  onClick={() => {
                    if (residents > 0) {
                      setResidentsNumber(residents - 1);
                    }
                  }}
                >
                  -
                </Button>
                <div className="number"> {residents} </div>
                <Button
                  type="button"
                  className="buttonStyle"
                  onClick={() => {
                    setResidentsNumber(residents + 1);
                  }}
                >
                  +
                </Button>
                <div className="roomNo"> Rezidenti </div>
              </div>
            </div>
          </div>

          <label className="formStyle">
            <div className="formFieldTitle"> Facilitati: </div>
            <div className="facilityInputContainer">
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
            {facilities.length > 0 && (
              <div className="facilitiesList">
                {" "}
                {facilities.map((facility, index) => (
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

          {/* Rules Input and List */}
          <label className="formStyle">
            <div className="formFieldTitle">Reguli:</div>
            <div className="facilityInputContainer">
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

          {/* Location Input */}
          <div className="formFieldTitle">
            Locatie
            <LocationInputMap onSaveLocation={handleSaveLocation} />
          </div>

          {/* Submit Button */}
          <div className="submitDiv">
            <Button
              type="button"
              className="buttonStyle"
              onClick={handleSubmit}
            >
              Adauga
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddImob;
