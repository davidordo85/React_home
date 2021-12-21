import React from 'react';
import Layout from '../../layout/Layout';
import LoginForm from './LoginForm';

import { login } from '../../../api/auth';
import { Card, Alert } from 'react-bootstrap';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const resetError = () => setError(null);

  const handleSubmit = async credentials => {
    try {
      setIsLoading(true);
      setError(null);
      await login(credentials);
      onLogin();
    } catch (error) {
      setError(error);
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
          <LoginForm onSubmit={handleSubmit} />
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
