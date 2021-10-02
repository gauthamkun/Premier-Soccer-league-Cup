import React, { useState } from "react";

function Form({ loginApp, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitButton = (e) => {
    e.preventDefault();
    loginApp(details);
  };
  return (
    <form onSubmit={submitButton}>
      <div className="form-group">
        <label htmlFor="Username">Username</label>
        <input
          className="form-input"
          type="text"
          name="Username"
          placeholder="Enter your username"
          id="Username"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Enter your email"
          id="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Enter your password"
          id="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
}

export default Form;
