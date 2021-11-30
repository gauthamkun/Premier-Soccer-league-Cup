import React from "react";
import axios from "axios";

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      role: "",
      message: "",
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange = (e) => {
    if (this.state.role === "Tournament Manager")
      this.history.push("/TournamentManagerPage");
    else if (this.state.role === "Coach") this.history.push("/CoachPage");

    window.location.reload();
  };
  handleDropdownChange = (e) => {
    this.setState({ role: e.target.value });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitRegister(e) {
    e.preventDefault();
    window.location = "http://localhost:3000/register";
  }

  submitLogin(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };

    axios
      .get("http://localhost:8082/LoginAPIBackend/login/check", {
        params: { email: this.state.email, password: this.state.password },
      })
      .then((response) => {
        console.log(response);
        window.localStorage.setItem("role", response.data.role);
        window.location = "http://localhost:3000/";
        const searchValue = window.localStorage.getItem("role");
      })
      .catch(function (response) {
        //handle error
        // alert(response.data )
      });
  }

  render() {
    return (
      <div className="login-card">
        <div className="login-card__header">Login</div>
        <div className="login-card__controls">
          <div className="login-card__control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Username"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="login-card__control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitLogin.bind(this)}
          >
            Login
          </button>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister.bind(this)}
          >
            Register
          </button>
        </div>
        <div style={{ color: "red" }}>{this.state.message}</div>
      </div>
    );
  }
}

export default LoginBox;
