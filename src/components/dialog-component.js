import React from "react";
import { Modal, Form } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

const EmailModal = ({ showModal, handleCloseModal }) => {
  const [state, handleSubmit] = useForm(
    process.env.REACT_APP_FORMSPREE_FORM_ID
  );
  if (state.succeeded) {
    handleCloseModal();
  } else if (state.errors) {
    // TODO: handle errors, show another modal and a message
    handleCloseModal();
  }
  const labelStyle = {
    display: "block",
    marginBottom: "5px",
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Te anunțăm când ne lansăm</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={labelStyle}>Email</Form.Label>
            <Form.Control type="email" placeholder="Scrie email" name="email" />
            <Form.Text className="text-muted">
              Îți vom trimite prin e-mail confirmările și notificările.
            </Form.Text>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label style={labelStyle}>Nume complet </Form.Label>
            <Form.Control type="text" placeholder="Popescu Ion" name="name" />
            <Form.Text className="text-muted">
              Asigură-te că se potrivește cu numele de pe actul tău de
              identitate.
            </Form.Text>
          </Form.Group>
          <button type="submit" disabled={state.submitting}>
            Trimite
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EmailModal;
