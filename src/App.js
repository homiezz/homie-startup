import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homieLogo from "./assets/logo-homie.png";
import React, { useState } from "react";
import EmailModal from "./components/dialog-component";
import { Button } from "react-bootstrap";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "homie-12235.firebaseapp.com",
  projectId: "homie-12235",
  storageBucket: "homie-12235.appspot.com",
  messagingSenderId: "739903230811",
  appId: "1:739903230811:web:65e39cfafb88da9549807e",
  measurementId: "G-T1E3L1LTCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light m-4 rounded 100vw">
            <div className="container-fluid">
              <div>
                <img src={homieLogo} alt="House Icon" className="imageStyle" />
              </div>

              <button
                className="navbar-toggler ml-auto custom-toggler"
                type="button"
                color="white"
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
                    <Button variant="link" onClick={handleOpenModal}>
                      Loghează-te
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
