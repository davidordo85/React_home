import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { duplicated } from '../../../api/auth';

function LoginAndRegisterForm({ onSubmit, isLoading, variant }) {
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: '',
  });
  const [ok, setOk] = React.useState(false);
  const [check, setCheck] = React.useState();

  const handleChange = event => {
    setCredentials(oldCredentials => {
      const newCredentials = {
        ...oldCredentials,
        [event.target.name]: event.target.value,
      };
      return newCredentials;
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(credentials);
  };

  const { username, password } = credentials;

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleCheck(credentials);
    }, 1000);
    return () => clearInterval(interval);
  }, [credentials]);

  const handleCheck = async credentials => {
    try {
      const success = await duplicated(credentials);
      setCheck(success);
      if (success.success === true) {
        setOk(true);
      } else {
        setOk(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(check, username, ok);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>username address</Form.Label>
          <Form.Control
            name="username"
            type="username"
            placeholder="Enter username"
            isValid={ok}
            isInvalid={!ok || username.length <= 6}
            value={username}
            onChange={handleChange}
          />
        </Form.Group>
        {!ok ? (
          <Form.Text className="text-muted">Duplicate user</Form.Text>
        ) : username.length <= 6 ? (
          <Form.Text className="text-muted">
            the user must have more than 6 characters{' '}
          </Form.Text>
        ) : null}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            isValid={password.length > 5}
            isInvalid={password.length < 5}
            value={password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          variant={variant}
          type="submit"
          disabled={isLoading || !username || !password || !ok}
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
