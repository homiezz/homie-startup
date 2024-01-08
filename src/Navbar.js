import "bootstrap/dist/css/bootstrap.min.css";
import homieLogo from "./assets/logo-homie.png";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useMatch } from "react-router-dom";
import AuthModal from "./components/auth-component";

export default function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleOpenAuthModal = () => {
    setShowAuthModal(true);
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

  const isAddImobRoute = useMatch("/addImob");
  const isAboutRoute = useMatch("/about");
  const isHomeRoute = useMatch("/homie-startup");
  const isProfileRoute = useMatch("/profile");

  return (
    <div className="navbarStyle">
      <AuthModal
        showAuthModal={showAuthModal}
        handleCloseAuthModal={handleCloseAuthModal}
      />
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light m-4 rounded 100vw">
          <div className="container-fluid">
            <Link to="homie-startup" className="nav-item no-underline">
              <img src={homieLogo} alt="House Icon" className="imageStyle" />
            </Link>
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
                {isHomeRoute ? (
                  // Render specific content for home page
                  <>
                    <Link to="" className="nav-item no-underline">
                      Vezi imobile disponibile
                    </Link>
                    <Link to="/addImob" className="nav-item no-underline">
                      Înregistrează-ți imobilul
                    </Link>
                    <Link to="/about" className="nav-item no-underline">
                      Despre noi
                    </Link>
                    <li className="nav-item no-underline">
                      <Button variant="link" onClick={handleOpenAuthModal}>
                        Conectează-te
                      </Button>
                    </li>
                  </>
                ) : null}

                {isAddImobRoute || isAboutRoute || isProfileRoute ? (
                  // Render specific content for certain pages
                  <>
                    <Link to="" className="nav-item no-underline">
                      Setari
                    </Link>
                    <Link to="" className="nav-item no-underline">
                      Exploreaza imobile
                    </Link>
                    <Link to="/about" className="nav-item no-underline">
                      Despre noi
                    </Link>
                    <Link to="/profile" className="nav-item no-underline">
                      Profil
                    </Link>
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
