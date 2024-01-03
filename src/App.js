import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homieLogo from "./assets/logo-homie.png";
import React, { useState } from "react";
import EmailModal from "./components/dialog-component";
import { Button } from "react-bootstrap";
import AuthModal from "./components/auth-component";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleOpenAuthModal = () => {
    setShowAuthModal(true);
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
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
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light m-4 rounded 100vw">
            <div className="container-fluid">
              <div>
                <img src={homieLogo} alt="House Icon" className="imageStyle" />
              </div>
              <button
                className="navbar-toggler ml-auto custom-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse buttonContainerStyle"
                id="navbarNav"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Button variant="link" onClick={handleOpenModal}>
                      Vezi imobile disponibile
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button variant="link" onClick={handleOpenModal}>
                      Înregistrează-ți imobilul
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button variant="link" onClick={handleOpenModal}>
                      Contact
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button variant="link" onClick={handleOpenAuthModal}>
                      Loghează-te
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <AuthModal
        showAuthModal={showAuthModal}
        handleCloseAuthModal={handleCloseAuthModal}
      />
    </div>
  );
}

export default App;
