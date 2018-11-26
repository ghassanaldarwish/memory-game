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
 
  render() {
    const { classes } = this.props;
    return (
      <div className="uploadform">
        <UploadForm />
      </div>
    );
  }
}

export default withStyles(styles)(UploadImage);
