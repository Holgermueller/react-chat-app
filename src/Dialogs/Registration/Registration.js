import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from "@material-ui/core";

const textField = {
  margin: "2% auto"
};

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openForm = () => {
    this.setState({ open: true });
  };

  closeForm = () => {
    this.setState({ open: false });
    this.clearForm();
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.closeForm();
  };

  clearForm = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  render() {
    return (
      <div>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={this.openForm}
        >
          <h1>Registration</h1>
        </Button>

        <Dialog fullScreen open={this.state.open}>
          <DialogTitle>Register here:</DialogTitle>

          <DialogContent>
            <form>
              <TextField
                style={textField}
                type="text"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
                label="Username"
                variant="outlined"
                fullWidth
              ></TextField>

              <TextField
                style={textField}
                type="text"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
                label="Email"
                variant="outlined"
                fullWidth
              ></TextField>

              <TextField
                style={textField}
                type="text"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                label="Password"
                variant="outlined"
                fullWidth
              ></TextField>

              <TextField
                style={textField}
                type="text"
                id="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                label="Confirm Password"
                variant="outlined"
                fullWidth
              ></TextField>
            </form>
          </DialogContent>

          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={this.closeForm}
            >
              Cancel
            </Button>

            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={this.handleSubmit}
              disabled={!this.state.email || !this.state.password}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
