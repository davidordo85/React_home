import React from 'react';
import Layout from '../../layout/Layout';
import LoginAndRegisterForm from '../LoginPage/LoginAndRegisterForm';
import { Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../api/auth';

function RegisterPage() {
  const [error, setError] = React.useState(null);
  const [variant, setVariant] = React.useState('primary');
  const [isLoading, setIsLoading] = React.useState(false);
  let navigate = useNavigate();
  const resetError = () => setError(null);

  const handleSubmit = async credentials => {
    setIsLoading(true);
    setError(null);
    setVariant('primary');
    try {
      await register(credentials);
      setVariant('success');
      navigate('/login');
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
        <Card.Header>Register</Card.Header>
        <Card.Body>
          <LoginAndRegisterForm
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

export default RegisterPage;
