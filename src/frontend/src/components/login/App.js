import React, { useState } from "react";
import Form from "./component/Form";
export default App;

function App() {
  const loginUser = {
    email: "admin@gmail.com",
    password: "admin@1997",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const loginApp = (details) => {
    console.log(details);
    if (
      details.email == loginUser.email &&
      details.password == loginUser.password
    ) {
      console.log("Login Success");
      setUser = {
        name: details.name,
        email: details.email,
      };
    } else {
      console.log("Login Failed");
    }
  };
  const logOutApp = () => {
    console.log("User has logged out");
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <div className="Step 1">
          <h1>
            Welcome, <span>{user.name}</span>
          </h1>
          <button>Logout</button>
        </div>
      ) : (
        <Form loginApp={loginApp} error={error} />
      )}
    </div>
  );
}
