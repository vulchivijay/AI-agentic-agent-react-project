import React from 'react';
import Alert from '../components/Alert';
import Card from '../components/Card';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';

const GeneratedPage = () => (
  <div>
    <Alert variant="success">User Profile Page</Alert>
    <Card title="Profile Info">
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Button variant="primary">Submit</Button>
      </Form>
    </Card>
  </div>
);

export default GeneratedPage;
