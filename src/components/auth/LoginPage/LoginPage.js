import React from 'react';
import Layout from '../../layout/Layout';
import LoginForm from './LoginForm';

import { login } from '../../../api/auth';
import { Card } from 'react-bootstrap';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const handleSubmit = async credentials => {
    await login(credentials);
    onLogin();
  };
  return (
    <Layout>
      <Card className="login">
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <LoginForm onSubmit={handleSubmit} />
        </Card.Body>
      </Card>
    </Layout>
  );
}

export default LoginPage;
