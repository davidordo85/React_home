import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';

function LoginAndRegisterForm({ onSubmit, isLoading, variant }) {
  const [credentials, setCredentials] = React.useState({
    username: '',
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

  const { username, password, remember } = credentials;

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicusername">
          <Form.Label>username address</Form.Label>
          <Form.Control
            name="username"
            type="username"
            placeholder="Enter username"
            value={username}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
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
        </Form.Group>

        <Button
          variant={variant}
          type="submit"
          disabled={isLoading || !username || !password}
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

export default LoginAndRegisterForm;
