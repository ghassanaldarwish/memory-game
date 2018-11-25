import React, { Component } from "react";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import UploadForm from "./updateForm/updateForm";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import "./uploadimage.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class UploadImage extends Component {
  onSubmitHandlerImg1 = e => {
    e.preventDefault();
    console.log("hello img 1");
  };

  onSubmitHandlerImg2 = e => {
    e.preventDefault();
    console.log("hello img 2");
  };
  onSubmitHandlerImg3 = e => {
    e.preventDefault();
    console.log("hello img 3");
  };
  onSubmitHandlerImg4 = e => {
    e.preventDefault();
    console.log("hello img 4");
  };
  onSubmitHandlerImg5 = e => {
    e.preventDefault();
    console.log("hello img 5");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="uploadform">
        <UploadForm onSubmitHandler={this.onSubmitHandlerImg1} />
        <UploadForm onSubmitHandler={this.onSubmitHandlerImg2} />
        <UploadForm onSubmitHandler={this.onSubmitHandlerImg3} />
        <UploadForm onSubmitHandler={this.onSubmitHandlerImg4} />
        <UploadForm onSubmitHandler={this.onSubmitHandlerImg5} />
      </div>
    );
  }
}

export default withStyles(styles)(UploadImage);
