import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import EmailModal from "../components/dialog-component";
import { Button } from "react-bootstrap";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cropContainer">
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
  );
}
