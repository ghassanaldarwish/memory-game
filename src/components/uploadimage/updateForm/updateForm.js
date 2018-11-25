import React, { Component } from "react";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";

const styles = theme => ({
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

class UploadForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <form
        className="d-flex m-4"
        onSubmit={this.props.onSubmitHandler}
        enctype="multipart/form-data"
      >
        <input
          type="file"
          name="file-to-upload"
          className="form-control-file center"
        />
        <Button
          type="submit"
          value="Upload"
          variant="contained"
          color="default"
        >
          Upload
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(UploadForm);
