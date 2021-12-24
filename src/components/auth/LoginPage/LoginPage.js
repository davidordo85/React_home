import React from 'react';
import Layout from '../../layout/Layout';
import LoginForm from './LoginForm';

import { login } from '../../../api/auth';
import { Card, Alert } from 'react-bootstrap';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const [error, setError] = React.useState(null);
  const [variant, setVariant] = React.useState('primary');
  const [isLoading, setIsLoading] = React.useState(false);
  const resetError = () => setError(null);

  const handleSubmit = async credentials => {
    setIsLoading(true);
    setError(null);
    setVariant('primary');
    try {
      await login(credentials);
      setVariant('success');
      onLogin();
    } catch (error) {
      setError(error);
      setVariant('danger');
    } finally {
      setIsLoading(false);
    }
  };

  console.log(error);
  console.log(isLoading);

  return (
    <Layout>
      <Card className="login">
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <LoginForm
            onSubmit={handleSubmit}
            isLoading={isLoading}
            variant={variant}
          />
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
