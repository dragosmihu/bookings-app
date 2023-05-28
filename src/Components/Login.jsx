import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {
  Container,
  Card,
  Form,
  Alert,
  Button,
} from "react-bootstrap";
import accountService from "../Service/Account";
import { useAuth } from "../Context/AuthContext";
import '../Styles/Login.css';

const Login = () => {
    const { logIn } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const nav = useNavigate();
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
      const account = await accountService.findAccount(formData.email);
      if (account && account.password === formData.password) {
        setHasLoggedIn(true);
        nav("/");
        logIn(account.firstName + " " + account.lastName);
      } else {
        setFormErrors(prev => ({
          ...prev,
          submit: "Incorrect email or password"
        }));
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email-ul este obligatoriu";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email-ul este invalid";
    }
    if (!formData.password) {
      errors.password = "Parola este obligatorie";
    }
    return errors;
  };


  if (hasLoggedIn) {
     return <div>Autentificare cu succes</div>;
  }

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div
        className="w-100"
        style={{ maxWidth: "400px",  position: "absolute" }}
      >
        <Card>
          <Card.Body className="cardBody container-login">
            <div>
              <h2 className="login-heading text-center mb-4">Autentificare</h2>
            </div>
            {formErrors.submit && (
              <Alert variant="danger" className="text-center">
                {formErrors.submit}
              </Alert>
            )}
            <Form className="login-form" onSubmit={handleSubmit}>
              <Form.Group id="email" className="form-group text-center">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!formErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group id="password" className="form-group text-center">
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
                <Button className="w-100 mt-4" type="submit">
                  Autentificare
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
  )};
  
  export default Login;
