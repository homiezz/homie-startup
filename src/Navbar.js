import "bootstrap/dist/css/bootstrap.min.css";
import homieLogo from "./assets/logo-homie.png";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const isAddImobRoute = useMatch("/addImob");
  const isAboutRoute = useMatch("/about");
  const isHomeRoute = useMatch("homie-startup");

  return (
    <div className="navbarStyle">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light m-4 rounded 100vw">
          <div className="container-fluid">
            <div>
              <Link to="homie-startup" className="nav-item">
                <img src={homieLogo} alt="House Icon" className="imageStyle" />
              </Link>
            </div>
            <div
              className="collapse navbar-collapse buttonContainerStyle"
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto">
                {isHomeRoute ? (
                  // Render specific content for the /addImob route
                  <>
                    <li className="nav-item">
                      <Button variant="link" onClick={handleOpenModal}>
                        Vezi imobile disponibile
                      </Button>
                    </li>
                    <Link to="/addImob" className="nav-item">
                      Înregistrează-ți imobilul
                    </Link>
                    <Link to="/about" className="nav-item">
                      Despre noi
                    </Link>
                    <li className="nav-item">
                      <Button variant="link" onClick={handleOpenModal}>
                        Loghează-te
                      </Button>
                    </li>
                  </>
                ) : null}

                {isAddImobRoute || isAboutRoute ? (
                  // Render specific content for the /addImob route
                  <>
                    <li className="nav-item">
                      <Button variant="link" onClick={handleOpenModal}>
                        Setari
                      </Button>
                    </li>
                    <Link className="nav-item">Exploreaza imobile</Link>
                    <Link to="/about" className="nav-item">
                      Despre noi
                    </Link>
                    <Link className="nav-item">Profil</Link>
                  </>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
