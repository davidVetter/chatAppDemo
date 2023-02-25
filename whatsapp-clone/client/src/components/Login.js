import { React, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('This is your value: ', idRef.current.value);
    onIdSubmit(idRef.current.value);
    idRef.current.value = '';
  }

  return (
    <Container className="align-items-center d-flex" style={{height: '100vh' }}>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type='submit' className='me-2'>Login</Button>
        <Button variant="secondary">Create A New Id</Button>
      </Form>
    </Container>
  );
}
