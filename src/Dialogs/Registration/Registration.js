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
      open: false
    };
  }

  openForm = () => {
    this.setState({ open: true });
  };

  closeForm = () => {
    this.setState({ open: false });
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
                label="Username"
                variant="outlined"
                fullWidth
              ></TextField>

              <TextField
                style={textField}
                type="text"
                label="Email"
                variant="outlined"
                fullWidth
              ></TextField>

              <TextField
                style={textField}
                type="text"
                label="Password"
                variant="outlined"
                fullWidth
              ></TextField>

              <TextField
                style={textField}
                type="text"
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

            <Button variant="outlined" color="primary" size="large">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
