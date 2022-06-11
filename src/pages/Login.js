import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handlesubmit = async (e) => {
    if (username === "foo" && password === "bar") {
      navigate("/home");
      localStorage.setItem("logged-in", "sucess");
    } else {
      alert("invalid credentials=> username:foo, password: bar");
    }
  };
  return (
    <div className="login">
      <div className="right-login">
        <img src="https://www.focusacademy.in/images/boy_book.png" alt="" />
      </div>
      <form className="loginbox" onSubmit={handlesubmit}>
        <h1 className="login-title">Focus Academy</h1>
        <div className="login-inputcontainer">
          <div>
            <label className="inp-component" htmlFor="username">
              <input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="inp-component">
              <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="login-input"
                type="password"
              />
            </label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
