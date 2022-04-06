import React from "react";
import Form from 'react-bootstrap/Form';
import {Button, Col, Row } from "react-bootstrap";



const Login = () => {
  return (
    <div class="container shadow p-3 m-5 bg-white rounded ">
      <div class="row">
          <div class="col justify-content-center p-3 mb-5 bg-white rounded m-5  ">
          <div className="text-center">
            <img style={{height:"5rem", width: "8rem" }} src ="./assets/ttnlogo.jpg"></img>
              <h3 className ="mt-5"> Enter your details and Start your journey with us</h3>
              <p className="mt-3"> Don't stop until you are proud.</p>
              <Form>
              <Button className="mt-5 rounded-pill btn-lg" variant="outline-danger">Sign in with Google</Button>
              </Form>
          </div>

          </div>

      <div className="col ">
      <Form className="shadow p-3 mb-5 bg-white rounded m-5 justify-content-center">
		          
            <h3 className=" mt-2 text-center"> Login to Your Account</h3>
            <Form.Group className="mt-4" controlId="formBasicEmail">
               
                <Form.Control className="mt-5"  type="email" placeholder="TTN Username" />
                <Form.Control className="mt-4" type="password" placeholder="Enter Password" />

                <Row>
                  <Col>
                    <Form.Check className="mt-4" type="checkbox" label="Remeber Me" />

                  </Col>
                  <Col>
                    <Form.Check className="mt-4" type="checkbox" label="Forget Password" />
                  </Col>
                </Row>

                
            </Form.Group>
            <div className="text-center mt-4">
            <Button className="mt-5 rounded-pill btn-lg m-3 text-center" style={{backgroundColor: "#AB5FB0", border: "none"}} variant="success">Sign in</Button>

            </div>
        </Form>

      </div>
  </div>
  </div>
    
  );
};
export default Login;