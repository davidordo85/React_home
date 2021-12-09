import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './ChatMain.css';

const ChatMain = () => {
  return (
    <section>
      <div className="chat">
        <div></div>
        <div>
          <Form className="message">
            <Form.Control type="message" placeholder="Enter message" />
            <Button>Send</Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ChatMain;
