import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input type="text" placeholder="username" />

        <label>Password</label>
        <input type="password" placeholder="password" />
        <div className="btnContainer">
          <button>Sign In</button>
        </div>
        <Button variant="contained" color="primary" style={{ height: "50px" }}>
          Register
        </Button>
      </div>
    </section>
  );
}
