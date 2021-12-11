import React from 'react';
import Layout from '../../layout/Layout';
import LoginForm from './LoginForm';
import { Card } from 'react-bootstrap';
import './LoginPage.css';

function LoginPage() {
  return (
    <Layout>
      <Card className="login">
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <LoginForm />
        </Card.Body>
      </Card>
    </Layout>
  );
}

export default LoginPage;
