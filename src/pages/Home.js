import React, { Component } from "react";
import Registration from "../Dialogs/Registration/Registration";
import Login from "..//Dialogs/Login/Login";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Log in here:</h1>
        <Login />
        <h2>Or</h2>
        <h1>Register here:</h1>
        <Registration />
      </div>
    );
  }
}

export default Home;
