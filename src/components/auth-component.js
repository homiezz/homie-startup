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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";
import Cookies from "js-cookie";

const AuthModal = ({ showAuthModal, handleCloseAuthModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      var userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      Cookies.set("idToken", await userCredential.user.getIdToken());
      handleCloseAuthModal();
      navigate("/homie-startup");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignUp = async () => {
    if (passwordsMatch) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
        Cookies.set("idToken", await userCredential.user.getIdToken());

        const response = await axios.post(
          `${config.backendApiUrl}/api/signup`,
          {
            email: user.email,
          },
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          navigate("/homie-startup");
          handleCloseAuthModal();
        } else {
          console.error(response.data.message);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      // const credential = googleProvider.credentialFromResult(userCredential);
      // const token = credential.accessToken;
      // Cookies.set("idToken", token);
      navigate("/homie-startup");
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
