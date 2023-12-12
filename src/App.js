import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import homieLogo from "./assets/logo-homie.png";
import React, { useState } from "react";
import EmailModal from "./components/dialog-component";
import Navbar from "./components/Navbar";
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="backgroundStyle">
      <div className="cropContainter">
        <div className="overlayStyle">
          <div className="homieTitle">Homie</div>
          <div className="subtitleStyles">
            Platformă de recenzii pentru proprietari și chiriași <br />
            Încrederea se câștigă prin transparență
          </div>
          <div className="inputContainerStyle">
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
      </div>
      <div className="navbarStyle">
        <div>
          <img src={homieLogo} alt="House Icon" className="imageStyle" />
        </div>
        <div className="buttonContainerStyle">
          <Button
            variant="link"
            className="buttonLinkStyle"
            onClick={handleOpenModal}
          >
            Vezi imobile disponibile
          </Button>
          <Button
            variant="link"
            className="buttonLinkStyle"
            onClick={handleOpenModal}
          >
            Înregistrează-ți imobilul
          </Button>
          <Button
            variant="link"
            className="buttonLinkStyle"
            onClick={handleOpenModal}
          >
            Contact
          </Button>
          <Button
            variant="link"
            className="buttonLinkStyle"
            onClick={handleOpenModal}
          >
            Loghează-te
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
