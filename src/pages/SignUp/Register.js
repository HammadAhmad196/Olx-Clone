import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";

import { register } from "../../store/actions/userActions";

const Register = ({ location, history }) => {
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const redirect = location.search ? location.search.split("=") : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(register(name, email, password));
    } else {
      setMessage("Both Passwords Donot Match");
    }
  };
  return (
    <>
      <div className="wrapper body">
        <div className="logo">
          <img src="https://cdn3.iconfinder.com/data/icons/blue-line-interface/64/user-512.png" alt="" /> </div>
        <div className="text-center mt-4 name"> SignUp </div>
        {error && <Message variant="danger">{error}</Message>}
        {message && <Message variant="danger">{message}</Message>}

        {loading && <Loader />}
        <form className="p-3 mt-3" onSubmit={submitHandler}>
          <div className="form-field d-flex align-items-center">
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="form-field d-flex align-items-center">
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className="form-field d-flex align-items-center">
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="form-field d-flex align-items-center">
            <Form.Group controlId="confirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </div>
          <button className="btn mt-3">Signup</button>
        </form>
        <div className="text-center fs-6"> <Link to="/login">Already have an account?</Link> or <Link to="/login">Login</Link> </div>
      </div>

    </>
  );
};
export default Register;
