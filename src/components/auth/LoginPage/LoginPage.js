import React from 'react';
import Layout from '../../layout/Layout';
import LoginAndRegisterForm from './LoginAndRegisterForm';
import { login } from '../../../api/auth';
import { Card, Alert, Form } from 'react-bootstrap';
import './LoginPage.css';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const [error, setError] = React.useState(null);
  const [variant, setVariant] = React.useState('primary');
  const [isLoading, setIsLoading] = React.useState(false);
  const isLogged = React.useRef(false);
  let navigate = useNavigate();

  const resetError = () => setError(null);

  React.useEffect(() => {
    if (isLogged.current) {
      onLogin();
      navigate('/');
    }
  });

  const handleSubmit = async credentials => {
    setIsLoading(true);
    setError(null);
    setVariant('primary');
    try {
      await login(credentials);
      isLogged.current = true;
      setVariant('success');
    } catch (error) {
      setError(error);
      setVariant('danger');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Card className="login">
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <LoginAndRegisterForm
            onSubmit={handleSubmit}
            isLoading={isLoading}
            variant={variant}
          />
          <Form.Text>
            You do not have an account ? <Link to="/register">create one</Link>
          </Form.Text>
        </Card.Body>
        {error && (
          <Alert
            onClick={resetError}
            variant="danger"
            className="loginPage-error"
          >
            {error.message}
          </Alert>
        )}
      </Card>
    </Layout>
  );
}

export default LoginPage;
