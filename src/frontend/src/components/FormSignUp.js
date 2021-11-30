import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import { useState } from "react";
import axios from "axios";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(0);
  const [password2, setPassword2] = useState("");

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const onRegister = () => {
    const data = {
      emailId: email,
      password: password,
      role: role,
    };
    console.log(data);
    axios
      .post("http://localhost:8082/LoginAPIBackend/login/register", data)
      .then((response) => {
        alert("Registered successfully");
        window.location = "http://localhost:3000/Login";
      })
      .catch((error) => {
        alert(error.description);
      });
  };
  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label className="form-label">Role</label>
          <select
            id="dropdown"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="Select Role">Select Role</option>
            <option value="2">Player</option>
            <option value="3">Coach Director</option>
            <option value="4">Referee Director</option>
            <option value="5">Tournament Director</option>
          </select>
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit" onClick={onRegister}>
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login{" "}
          <a href="http://localhost:3000/Login">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
