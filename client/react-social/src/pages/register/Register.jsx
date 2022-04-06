import "./register.css";
import Form from 'react-bootstrap/Form';
import {Button } from "react-bootstrap";

export default function Register() {
  return (
    <div className="container-fluid justify-content-center  login">
      <div className="shadow p-5 loginWrapper">
        {/* left column  */}
        <div className="loginLeft">
          <img style={{height:"5rem", width: "8rem" }} src ="./assets/ttnlogo.jpg"></img>
          <h3 className="loginLogo">Buzzz</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Buzzz.
          </span>
        </div>
        {/* right column */}
        <div className="loginRight shadow">
          <Form className="shadow p-3 mb-5 bg-white rounded m-5 justify-content-center">
            <Form.Group >
              <Form.Control className="mb-2"  type="username" placeholder="TTN Username" />
              <Form.Control className="mb-2"  type="email" placeholder="TTN email" />
              <Form.Control className="mb-2"  type="password" placeholder="Enter Password" />
              <Form.Control className="mb-2"  type="password" placeholder="Retype Password" />
              <Button variant="primary"> SIGN UP </Button>
              <Button variant="outline-danger" style={{marginLeft:"1rem"}}>Log into your account</Button>
            </Form.Group>

          </Form>
        </div>
      </div>
    </div>
  );
}