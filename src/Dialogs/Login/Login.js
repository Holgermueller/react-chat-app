import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from "@material-ui/core";

export default class Login extends Component {
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
        <Button fullWidth onClick={this.openForm}>
          <h1>Login</h1>
        </Button>

        <Dialog open={this.state.open}>
          <DialogTitle>
            <h1>Log in here:</h1>
          </DialogTitle>

          <DialogContent>
            <form>
              <TextField
                type="text"
                label="Email"
                variant="outlined"
                fullWidth
              ></TextField>

              <TextField
                type="text"
                label="Password"
                variant="outlined"
                fullWidth
              ></TextField>
            </form>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.closeForm}>Cancel</Button>
            <Button>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
