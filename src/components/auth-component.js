import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import "./AuthModal.css";

const AuthModal = ({ showAuthModal, handleCloseAuthModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      handleCloseAuthModal();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      handleCloseAuthModal();
    } catch (err) {
      console.error(err);
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

  return (
    <Modal
      className="custom-modal"
      show={showAuthModal}
      onHide={handleCloseAuthModal}
      centered
    >
      <Modal.Header className="modal-header" closeButton>
        <Modal.Title>Authentication</Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body">
        <Form>
          <Form.Group className="modal-field" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="modal-field" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="submit-form-button-container">
            <Button
              className="submit-form-button"
              type="button"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button
              className="submit-form-button"
              type="button"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Button
              className="submit-form-button"
              type="button"
              onClick={handleSignInWithGoogle}
            >
              Sign In with Google
            </Button>
            <Button
              className="submit-form-button"
              type="button"
              onClick={handleLogOut}
            >
              Log Out
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
