import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import homieLogo from "./assets/logo-homie.png";
import React, { useState } from "react";
import EmailModal from "./components/dialog-component";
import {
  backgroundStyle,
  overlayStyle,
  textStyles,
  subtitleStyles,
  inputContainerStyle,
  navbarStyle,
  imageStyle,
  buttonContainerStyle,
  buttonLinkStyle,
} from "./styles/styles";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}>
        <div style={textStyles}>Homie</div>
        <div style={subtitleStyles}>
          Platformă de recenzii pentru proprietari și chiriași <br />
          Încrederea se câștigă prin transparență
        </div>
        <div style={inputContainerStyle}>
          <Button
            variant="primary"
            onClick={handleOpenModal}
            className="btn-send-email"
          >
            Arată-mi recenzii
          </Button>

          <EmailModal
            showModal={showModal}
            handleCloseModal={handleCloseModal}
          />
        </div>
      </div>
      <div style={navbarStyle}>
        <div>
          <img src={homieLogo} alt="House Icon" style={imageStyle} />
        </div>
        <div style={buttonContainerStyle}>
          <Button variant="link" style={buttonLinkStyle}>
            Vezi imobiliare disponibile
          </Button>
          <Button variant="link" style={buttonLinkStyle}>
            Înregistrează-ți imobilul
          </Button>
          <Button variant="link" style={buttonLinkStyle}>
            Contact
          </Button>
          <Button variant="link" style={buttonLinkStyle}>
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
