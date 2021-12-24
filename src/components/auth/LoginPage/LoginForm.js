import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginForm({ onSubmit, isLoading, variant }) {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = event => {
    setCredentials(oldCredentials => {
      const newCredentials = {
        ...oldCredentials,
        [event.target.name]: event.target.value,
        remember: event.target.checked,
      };
      return newCredentials;
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(credentials);
  };

  const { email, password, remember } = credentials;

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            name="remember"
            type="checkbox"
            label="Remember Password"
            checked={remember}
            onChange={handleChange}
          />
          <Form.Text>
            You do not have an account ? <Link to="/register">create one</Link>
          </Form.Text>
        </Form.Group>

        <Button
          variant={variant}
          type="submit"
          disabled={isLoading || !email || !password}
        >
          {isLoading ? (
            <Spinner
              as="span"
              variant="warning"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : null}
          {isLoading ? ' Loading...' : 'Submit'}
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
