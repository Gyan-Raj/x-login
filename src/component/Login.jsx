import React from "react";
import { useState } from "react";
import Form from "./Form";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  let handleSubmit = (e) => {
    e.preventDefault();
    userName === "user" && password === "password"
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
    userName === "" || password === ""
      ? setIsClicked(false)
      : setIsClicked(true);
  };
  let handleUsername = (e) => {
    let { value } = e.target;
    setUserName(value);
  };
  let handlePassword = (e) => {
    let { value } = e.target;
    setPassword(value);
  };
  return (
    <div>
      <h1>Login Page</h1>
      {!isClicked ? (
        <>
          <Form
            handleSubmit={handleSubmit}
            handleUsername={handleUsername}
            handlePassword={handlePassword}
          />
        </>
      ) : isLoggedIn ? (
        <p>Welcome, user!</p>
      ) : (
        <>
          <p>Invalid usename or password</p>
          <Form
            handleSubmit={handleSubmit}
            handleUsername={handleUsername}
            handlePassword={handlePassword}
          />
        </>
      )}
    </div>
  );
};

export default Login;
