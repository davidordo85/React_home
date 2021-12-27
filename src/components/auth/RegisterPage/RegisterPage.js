import React from 'react';
import Layout from '../../layout/Layout';
import RegisterForm from './RegisterForm';
import { Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../api/auth';

function RegisterPage() {
  const [error, setError] = React.useState(null);
  const [variant, setVariant] = React.useState('primary');
  const [isLoading, setIsLoading] = React.useState(false);
  const isNewUser = React.useRef(false);
  let navigate = useNavigate();
  const resetError = () => setError(null);

  React.useEffect(() => {
    if (isNewUser.current) {
      navigate('/login');
    }
  });

  const handleSubmit = async credentials => {
    setIsLoading(true);
    setError(null);
    setVariant('primary');
    try {
      await register(credentials);
      isNewUser.current = true;
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
        <Card.Header>Register</Card.Header>
        <Card.Body>
          <RegisterForm
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
