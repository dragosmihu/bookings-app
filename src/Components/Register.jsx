import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import React from "react";
import {
  Container,
  Card,
  Form,
  Alert,
  Button
} from "react-bootstrap";
import accountService from "../Service/Account";
import '../Styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [hasRegistered, setHasRegistered] = useState(false);
  const nav= useNavigate();
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setFormErrors(prev => ({
      ...prev,
      [name]: null
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const accountExists = await accountService.findAccount(formData.email);
      if (accountExists) {
        setFormErrors(prev => ({
          ...prev,
          email: "Există deja un cont cu această adresă de email"
        }));
      } else {
        const newAccount = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        };
        await accountService.addAccount(newAccount);
        setHasRegistered(true);
        nav("/");
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "Prenumele este obligatoriu";
    }
    if (!formData.lastName) {
      errors.lastName = "Numele este obligatoriu";
    }
    if (!formData.email) {
      errors.email = "Email-ul este obligatoriu";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email-ul este invalid";
    }
    if (!formData.password) {
      errors.password = "Parola este obligatoie";
    } else if (formData.password.length < 6) {
      errors.password = "Parola trebuie să aibă minim 6 caractere";
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirmarea parolei este obligatorie";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Parolele nu sunt identice";
    }
    return errors;
  };

   

  if (hasRegistered) {
    return (
      <Container className="d-flex align-items-center justify-content-center">
        <div
          className="w-100"
          style={{ maxWidth: "400px", position: "absolute" }}
        >
          <Card>
            <Card.Body className="cardBody">
              <div>
                <h2 className="text-center mb-4">Înregistrarea a fost efectuată</h2>
              </div>
              <Button className="w-100 mt-4" href="/">
                Home
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
    return (
    <Container className="d-flex align-items-center justify-content-center">
      <div
        className="w-100"
        style={{ maxWidth: "400px",  position: "absolute" }}
      >
        <Card>
          <Card.Body className="cardBody">
            <div>
              <h2 className="register-header text-center mb-4">Înregistrare</h2>
            </div>
            {formErrors.submit && (
              <Alert variant="danger" className="text-center">
                {formErrors.submit}
              </Alert>
            )}
            <Form className="register-form" onSubmit={handleSubmit}>
              <Form.Group id="firstName" className="register-group text-center">
                <Form.Label>Prenume</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  isInvalid={!!formErrors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.firstName}
                </Form.Control.Feedback>
                </Form.Group>
          <Form.Group id="lastName" className="register-group text-center">
            <Form.Label>Nume</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              isInvalid={!!formErrors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group id="email" className="register-group text-center">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!formErrors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group id="password" className="register-group text-center">
            <Form.Label>Parola</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!formErrors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group id="confirmPassword" className="register-group text-center">
            <Form.Label>Confirmare parola</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              isInvalid={!!formErrors.confirmPassword}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.confirmPassword}
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="w-100 mt-4" type="submit">
            Înregistrare
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </div>
</Container>
  )};

  export default Register;
