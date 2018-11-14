import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class OutlinedTextFields extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <TextField
      {...this.props}
        label={`${this.props.label}`}
        className={classes.textField}
        type={`${this.props.type || "text"}`}
        margin="normal"
        variant="outlined"
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}

export default withStyles(styles)(OutlinedTextFields);
