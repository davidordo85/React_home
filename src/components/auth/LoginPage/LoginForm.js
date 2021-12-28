import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';

function LoginAndRegisterForm({ onSubmit, isLoading, variant }) {
  const [select, setSelect] = React.useState('email');
  const [credentials, setCredentials] = React.useState({
    email: '',
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

  const handleSelect = event => {
    setSelect(event.target.value);
  };

  const { email, username, password, remember } = credentials;

  console.log(select);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelect}
        >
          <option value="email">Email</option>
          <option value="username">Username</option>
        </Form.Select>
        {select === 'email' ? (
          <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>{' '}
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </div>
        ) : select === 'username' ? (
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="username"
              placeholder="Enter username"
              value={username}
              onChange={handleChange}
            />
          </Form.Group>
        ) : null}

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
          disabled={
            isLoading ||
            !password ||
            (select === 'email' && !email) ||
            (select === 'username' && !username)
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
