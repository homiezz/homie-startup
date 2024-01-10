import "bootstrap/dist/css/bootstrap.min.css";
import homieLogo from "./assets/logo-homie.png";
import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link, useMatch } from "react-router-dom";
import AuthModal from "./components/auth-component";
import Cookies from "js-cookie";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleOpenAuthModal = () => {
    setShowAuthModal(true);
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      Cookies.remove("idToken");
      await signOut(auth);
      navigate("/homie-startup");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const isAddImobRoute = useMatch("/addImob");
  const isAboutRoute = useMatch("/about");
  const isHomeRoute = useMatch("/homie-startup");
  const isProfileRoute = useMatch("/profile");
  const isSettings = useMatch("/settings");
  const isRentalDetails = useMatch("/rental-details");
  const isPostsRoute = useMatch("/posts");
  const navigate = useNavigate();

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
                    <Link to="/posts" className="nav-item no-underline">
                      Vezi imobile disponibile
                    </Link>
                    <Link to="/addImob" className="nav-item no-underline">
                      Înregistrează-ți imobilul
                    </Link>
                    <Link to="/about" className="nav-item no-underline">
                      Despre noi
                    </Link>
                    {Cookies.get("idToken") === undefined ? (
                      <li className="nav-item no-underline" onClick={handleOpenAuthModal}>
                        Conectează-te
                      </li>
                    ) : (
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="link"
                          id="dropdown-basic"
                          style={{ display: 'flex', alignItems: 'center', marginTop: '-6px', marginLeft: '86px' }}
                        >
                          Profil
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to="/profile">
                            Vezi profil
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/settings">
                            Setări
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} onClick={handleLogout}>
                            Deconectează-te
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    )}
                  </>
                ) : null}

                {isAddImobRoute ||
                  isAboutRoute ||
                  isProfileRoute ||
                  isSettings ||
                  isPostsRoute ||
                  isRentalDetails ? (
                  // Render specific content for certain pages
                  <>
                    <Link to="homie-startup" className="nav-item no-underline">
                      Explorează imobile
                    </Link>
                    <Link to="/addImob" className="nav-item no-underline">
                      Înregistrează-ți imobilul
                    </Link>
                    <Link to="/about" className="nav-item no-underline">
                      Despre noi
                    </Link>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="link"
                        id="dropdown-basic"
                        style={{ display: 'flex', alignItems: 'center', marginTop: '-6px', marginLeft: '86px' }}
                      >
                        Profil
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/profile">
                          Vezi profil
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/settings">
                          Setări
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} onClick={handleLogout}>
                          Deconectează-te
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
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