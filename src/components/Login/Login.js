import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useSate([]);
  const [errors, setErrors] = useSate([]);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [docLogin, setDocLogin] = useState(true);
  const [patLogin, setPatLogin] = useState(false);
  const [loginData, setLoginData] = useSate({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setError([]);
    fetch(docLogin ? "/doclogin" : "/patlogin", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(loginData),
    }).then((r) => {
      if (r.ok) {
        r.json()
          .then((user) => {
            setUser(user);
          })
          .then(() => navigate("/"));
      } else {
        r.json().then((json) => setError(json.error));
      }
    });
  };
  return (
    <div className="login">
      <figure className="login-form-box">
        <div className="selector">
          <button
            className={docLogin ? "active" : null}
            onClick={handleDocClick}
          >
            Doctor
          </button>
          <button
            className={patLogin ? "active" : null}
            onClick={handlePatClick}
          >
            Patient
          </button>
          <button
            className={docLogin || patLogin ? null : "active"}
            onClick={handleSignup}
          >
            SignUp
          </button>
        </div>
        {docLogin || patLogin ? (
          <form className="input-group">
            <label for="" className="input-label">
              {docLogin ? "Employee" : "Patient"}Email:
            </label>
            <input
              className="input"
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              value={loginData.email}
            />
            <br></br>
            <br></br>
            <br></br>
            <label for="" className="input-label">
              Password:
            </label>
            <input
              className="input"
              type="password"
              name="password"
              onChange={handleChange}
              id="password"
              value={loginData.password}
            />
            <br></br>
            <a href="#" onClick={handleLogin} value="login" className="button">
              Login
            </a>
            <br></br>
            <br></br>
            <br></br>
          </form>
        ) : (
          <form className="input-group">
            <label className="input-label">Name:</label>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              onChange={handleSignUp}
              value={signupData.name}
            />
            <br></br>
            <br></br>
            <label className="input-label">Email:</label>
            <input
              className="input"
              type="text"
              name="email"
              id="email"
              onChange={handleSignUp}
              value={signupData.email}
            />
            <br></br>
            <br></br>
            <label className="input-label">Age:</label>
            <input
              className="input"
              type="text"
              name="age"
              id="age"
              onChange={handleSignUp}
              value={signupData.age}
            />
            <br></br>
            <br></br>
            <label className="input-label">Birthdate:</label>
            <input
              className="input"
              type="text"
              placeholder="mm/dd/yyyy"
              name="birthdate"
              id="birthdate"
              onChange={handleSignUp}
              value={signupData.birthdate}
            />
            <br></br>
            <br></br>
            <label className="input-label">Password:</label>
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              onChange={handleSignUp}
              value={signupData.password}
            />
            <br></br>
            <br></br>
            <label className="input-label">Confirm Password:</label>
            <input
              className="input"
              type="text"
              name="email"
              id="email"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors ? errors.map((e) => <p className="error">{e}</p>) : null}
            <br></br>
            <br></br>
            <br></br>
            <a href="#" onClick={handleSignUpSubmit} className="button">
              Sign Up
            </a>
            <br></br>
            <br></br>
            <br></br>
          </form>
        )}
      </figure>
    </div>
  );
};
export default Login;
