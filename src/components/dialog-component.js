import React from "react";
import { Modal, Form } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import "./EmailModal.css";

const EmailModal = ({ showModal, handleCloseModal }) => {
  const [state, handleSubmit] = useForm(
    process.env.REACT_APP_FORMSPREE_FORM_ID
  );

  const customSubmit = () => {
    handleSubmit();
    handleCloseModal();
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
  };

  const textBox = {
    backgroundColor: "#C5AFA7",
    border: "1px solid #C5AFA7",
  };

  return (
    <Modal
      className="custom-modal"
      show={showModal}
      onHide={handleCloseModal}
      centered
    >
      <Modal.Header className="modal-header" closeButton>
        <Modal.Title>Te anunțăm când ne lansăm!</Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body">
        <Form onSubmit={customSubmit}>
          <Form.Group className="modal-field" controlId="formBasicEmail">
            <Form.Label style={labelStyle}>Email</Form.Label>
            <Form.Control
              style={textBox}
              type="email"
              placeholder="Scrie email"
              name="email"
            />
            <Form.Text className="text-muted">
              Îți vom trimite prin e-mail confirmările și notificările.
            </Form.Text>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Form.Group>
          <Form.Group className="modal-field" controlId="formBasicName">
            <Form.Label style={labelStyle}>Nume și prenume </Form.Label>
            <Form.Control
              style={textBox}
              type="text"
              placeholder="Popescu Ion"
              name="name"
            />
            <Form.Text className="text-muted">
              Asigură-te că se potrivește cu numele de pe actul tău de
              identitate.
            </Form.Text>
          </Form.Group>
          <div className="submit-form-button-container">
            <button
              className="submit-form-button"
              type="submit"
              disabled={state.submitting}
            >
              Trimite
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EmailModal;
