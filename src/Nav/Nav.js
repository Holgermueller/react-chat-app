import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <h1 component={RouterLink} to="/">
          Home
        </h1>
        <h1 component={RouterLink} to="/dashboard">
          Dashboard
        </h1>
      </div>
    );
  }
}
