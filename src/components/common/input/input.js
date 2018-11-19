import React,{Fragment} from "react";
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
    let errors = null;
    if (this.props.errors) {
      errors =
        this.props.errors.find(o => o.param === this.props.name) ||
        this.props.errors;
    }

    return (
      <Fragment>
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
      {errors && <div className="invalid-feedback">{errors.msg}</div>}
      </Fragment>
    );
  }
}

export default withStyles(styles)(OutlinedTextFields);
