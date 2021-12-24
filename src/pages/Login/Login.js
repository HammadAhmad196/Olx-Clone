import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import Meta from "../../components/Meta/Meta";
import { login } from "../../store/actions/userActions";

const LoginScreen = ({ location, history }) => {

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  // const handleClick = () => {
  //   history.push("/ad");
  // }


  return (
    <>
      <div class="wrapper body">
        <Meta title="Login" />
        <div class="logo">
          <img src="https://cdn3.iconfinder.com/data/icons/blue-line-interface/64/user-512.png" alt="" /> </div>
        <div class="text-center mt-4 name"> Login </div>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <form class="p-3 mt-3" onSubmit={submitHandler} autoComplete={false}>
          <div class="form-field d-flex align-items-center">
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
          </div>
          <div class="form-field d-flex align-items-center">
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
          </div>
          <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6"> <Link to="/signup">Dont have an account?</Link> or <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>Sign up</Link> </div>
      </div>
    </>
  );
};

export default LoginScreen;
