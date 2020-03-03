import React, { Component } from "react";
import Registration from "../Dialogs/Registration/Registration";
import Login from "..//Dialogs/Login/Login";

const homePage = {
  width: "85%",
  margin: "27% auto"
};

class Home extends Component {
  render() {
    return (
      <div style={homePage}>
        <Login />

        <Registration />
      </div>
    );
  }
}

export default Home;
