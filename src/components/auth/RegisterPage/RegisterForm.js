import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';

function LoginAndRegisterForm({ onSubmit, isLoading, variant }) {
  const [credentials, setCredentials] = React.useState({
    email: '',
    username: '',
    password: '',
  });
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const isEmail = email => /\S+@\S+/.test(email);
  const isPassword = password => password.length >= 6;

  const handleChange = event => {
    setCredentials(oldCredentials => {
      const newCredentials = {
        ...oldCredentials,
        [event.target.name]: event.target.value,
      };
      return newCredentials;
    });
  };

  const handleRepeat = event => {
    setRepeatPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(credentials);
  };

  const { email, username, password } = credentials;

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
            isValid={isEmail(email)}
            isInvalid={!isEmail(email)}
            validate
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="username"
            placeholder="Enter username"
            value={username}
            onChange={handleChange}
            isValid={isPassword(username)}
            isInvalid={!isPassword(username)}
            validate
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            isValid={isPassword(password)}
            isInvalid={!isPassword(password)}
            validate
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
          <Form.Label>Repeat password</Form.Label>
          <Form.Control
            name="repeatPassword"
            type="repeatPassword"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={handleRepeat}
            isValid={password === repeatPassword}
            isInvalid={password !== repeatPassword}
            validate
          />
        </Form.Group>

        <Button
          variant={variant}
          type="submit"
          disabled={
            isLoading ||
            !email ||
            !username ||
            !password ||
            password !== repeatPassword
          }
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
