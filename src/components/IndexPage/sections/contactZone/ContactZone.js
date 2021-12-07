import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './ContactZone.css';

const ContactZone = () => {
  return (
    <div>
      <section id="contact">
        <Form>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formGroupPassword">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" placeholder="Message" />
          </Form.Group>
          <div className="submit">
            <Button>Submit</Button>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default ContactZone;
