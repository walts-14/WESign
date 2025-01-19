import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "../css/LoginForm.css";
import "../css/SignupForm.css";
import { useNavigate } from "react-router-dom";

function SigninForm() {
  const navigate = useNavigate();
  return (
    <>
      <div className="signup-container ">
        <div className="signup-card signup-width">
          <h1>Sign in</h1>
          <Form>
            <Form.Group className="input d-flex mb-2">
              <Form.Control
                type="number"
                placeholder="Age"
                className="login-input input-height"
              />
              <Form.Control
                type="text"
                placeholder="Year-Section"
                className="login-input input-height"
              />
            </Form.Group>

            <Form.Group className="mb-2 ">
              <Form.Control
                type="text"
                placeholder="Name"
                className="login-input input-height"
              />
            </Form.Group>

            <Form.Group className="mb-2 ">
              <Form.Control
                type="email"
                placeholder="Username"
                className="login-input input-height"
              />
            </Form.Group>

            <Form.Group className="mb-2 ">
              <Form.Control
                type="password"
                placeholder="Password"
                className="login-input input-height"
              />
            </Form.Group>

            <Form.Group className="mb-2 ">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                className="login-input input-height"
              />
            </Form.Group>

            <Button
              className="button-login"
              onClick={() => navigate("#")}
            >
              Submit
            </Button>
          </Form>

          <div className="sign-up">
            <p className="text-center text-light">
              Already have an account?{" "}
              <a href="/login " className="">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SigninForm;
