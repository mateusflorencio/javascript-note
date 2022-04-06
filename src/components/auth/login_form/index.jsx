import React, { Fragment, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import UserService from "../../../services/users";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UserService.login({
        email: email,
        password: password,
      });
      setRedirectToNotes(true);
    } catch (error) {
      setError(true);
    }
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    if (redirectToNotes) {
      navigate("/notes");
    }
  });

  return (
    <Fragment>
      <Form onSubmit={HandleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {error && (
          <Alert variant="danger" onClose={() => setError(false)} dismissible>
            <p>Email or password incorrect</p>
          </Alert>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default LoginForm;
