import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";

export default class Nav extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Button component={RouterLink} to="/">
            <h1>Home</h1>
          </Button>

          <Button component={RouterLink} to="/dashboard">
            {" "}
            <h1>Dashboard</h1>{" "}
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
