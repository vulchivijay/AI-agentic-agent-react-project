# Agent: Code Generation from Design/Requirements

## Purpose

Generate a React page using existing components based on a provided design screenshot or requirements document.

## Inputs

- Design screenshot (image file)
- Requirements document (doc, pdf, txt)
- List of use cases

## Tasks

1. Analyze design screenshot and/or requirements document
2. Map design elements to existing components (e.g., Alert, Button, Card, Form, Input, etc.)
3. Generate React page code using mapped components
4. Output the generated code

## Outputs

- React page code using existing components

---

## Example Output

```jsx
import React from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
import Card from "../components/Card";
import Form from "../components/Form";
import Input from "../components/Input";

const GeneratedPage = () => (
  <div>
    <Alert variant="success">Welcome to the generated page!</Alert>
    <Card title="User Info" text="Please fill out the form below.">
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Button variant="primary">Submit</Button>
      </Form>
    </Card>
  </div>
);

export default GeneratedPage;
```

---
