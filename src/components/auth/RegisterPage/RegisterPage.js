import React from 'react';
import Layout from '../../layout/Layout';
import { Card } from 'react-bootstrap';

function RegisterPage() {
  return (
    <Layout>
      <Card className="login">
        <Card.Header>Register</Card.Header>
        <Card.Body></Card.Body>
        {/*         {error && (
          <Alert
            onClick={resetError}
            variant="danger"
            className="loginPage-error"
          >
            {error.message}
          </Alert>
        )} */}
      </Card>
    </Layout>
  );
}

export default RegisterPage;
