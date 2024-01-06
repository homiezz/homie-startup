import React, { useState } from "react";
import { Modal, Form, Button, Tab, Tabs } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  getAuth,
} from "firebase/auth";
import { googleProvider } from "../firebase";
import "./AuthModal.css";
import GoogleButton from "react-google-button";
import { Link, useResolvedPath, useMatch, useNavigate } from "react-router-dom";

const AuthModal = ({ showAuthModal, handleCloseAuthModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      handleCloseAuthModal();
      navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignUp = async () => {
    if (passwordsMatch) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        handleCloseAuthModal();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      handleCloseAuthModal();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      handleCloseAuthModal();
    } catch (err) {
      console.error(err);
    }
  };

  const passwordsMatch = password === confirmPassword;

  return (
    <Modal
      className="custom-modal"
      show={showAuthModal}
      onHide={handleCloseAuthModal}
      centered
    >
      <Modal.Body className="modal-body">
        <Tabs className="custom-tabs" defaultActiveKey="signIn" id="auth-tabs">
          <Tab
            className="subtab"
            eventKey="signIn"
            title={<span className="tab-title">Conectează-te</span>}
          >
            <Form>
              <Form.Group className="modal-field" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Introdu adresa de email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="textbox"
                />
              </Form.Group>
              <Form.Group className="modal-field" controlId="formBasicPassword">
                <Form.Label>Parolă</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Introdu parola"
                  onChange={(e) => setPassword(e.target.value)}
                  className="textbox"
                />
              </Form.Group>
              <div className="submit-form-button-container">
                <Button
                  className="submit-form-button"
                  type="button"
                  onClick={handleSignIn}
                >
                  Conectează-te
                </Button>
                <GoogleButton
                  className="google-sign-in-button"
                  onClick={handleSignInWithGoogle}
                  type="dark"
                  label="Continuă cu Google"
                />
              </div>
            </Form>
          </Tab>

          <Tab
            className="subtab"
            eventKey="signUp"
            title={<span className="tab-title">Înscrie-te</span>}
          >
            <Form>
              <Form.Group className="modal-field" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Introdu adresa de mail"
                  onChange={(e) => setEmail(e.target.value)}
                  className="textbox"
                />
              </Form.Group>
              <Form.Group className="modal-field" controlId="formBasicPassword">
                <Form.Label>Parolă</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Introdu parola"
                  onChange={(e) => setPassword(e.target.value)}
                  className="textbox"
                />
              </Form.Group>
              <Form.Group
                className="modal-field"
                controlId="formBasicConfirmPassword"
              >
                <Form.Label>Confirmă parola</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Reintrodu parola"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="textbox"
                />
              </Form.Group>
              {password !== "" && confirmPassword !== "" && !passwordsMatch && (
                <div className="error-box">
                  <p className="text-danger">Parolele nu sunt identice</p>
                </div>
              )}
              {password !== "" && confirmPassword !== "" && passwordsMatch && (
                <div className="success-box">
                  <p className="text-success">Parolele sunt identice</p>
                </div>
              )}
              <div className="submit-form-button-container">
                <Button
                  className="submit-form-button"
                  type="button"
                  onClick={handleSignUp}
                >
                  Înscrie-te
                </Button>
              </div>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
