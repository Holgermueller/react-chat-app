import React, { Component } from "react";
import { TextField, Button, FormControl } from "@material-ui/core";

const formStyles = {
  width: "95%",
  marginBottom: "0",
  marginLeft: "auto",
  marginRight: "auto",
  left: "2%",
  bottom: "2%",
  position: "absolute"
};

const textFieldStyles = {
  width: "85%",
  float: "left"
};

const buttonStyles = {
  marginLeft: "1%"
};

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.setState({
      message: ""
    });
  };

  render() {
    return (
      <form style={formStyles} onSubmit={this.handleSubmit}>
        <FormControl style={textFieldStyles}>
          <TextField
            type="text"
            id="message"
            value={this.state.message}
            label="Message..."
            variant="outlined"
            fullWidth
            onChange={this.handleChange}
          />
        </FormControl>

        <Button
          style={buttonStyles}
          size="large"
          color="primary"
          variant="contained"
          value="Submit"
          type="submit"
        >
          Submit
        </Button>
      </form>
    );
  }
}
