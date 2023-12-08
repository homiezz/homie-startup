import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';

const EmailModal = ({ showModal, handleCloseModal }) => {
  const [state, handleSubmit] = useForm('mleyqnrz');
  if (state.succeeded) {
    console.log("merge");
  }
  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={labelStyle}>
              Your Email address
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email"/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label style={labelStyle}>
              Your Name
            </Form.Label>
            <Form.Control type="text" placeholder="John Doe" name="name" />
          </Form.Group>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </Form>
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmailModal;
