import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  useEffect(() => {
    if (loginStatus) {
      return () => {
        <Redirect to="/dashboard" />;
      };
    }
  }, [loginStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "4fcca4fa-bb1b-4bee-a528-a61f5c13a6c4",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      // username | password => chat engine -> give message
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      // works out -> logged in
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      setLoginStatus(true);

    } catch (err) {
      // error -> incorrect credentials ...
      setError(
        `Oops, incorrect credentials, try again with correct credentials.`
      );
      setUsername("");
      setPassword("");
    }
  };

  if (localStorage.getItem("username")) {
    return (
      <>
        <Redirect to="/dashboard" />
      </>
    );
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="login-title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button
              type="submit"
              className="login-button"
              style={{ backgroundColor: "#209cee" }}
            >
              <span>Login</span>
            </button>
          </div>
          <h2 className="login-error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
