import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./startGame.css";
import { Link } from "react-router-dom";
import UploadImage from "../uploadimage/uploadimage";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: "100vw",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class StartGame extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.layout}>
        <Typography component="h2" variant="display3" gutterBottom>
          Start Game
        </Typography>

        <Typography component="p" className="mb-3">
          Use the buttons below to choose the size of your gameboard:
        </Typography>
        <div
          className="d-flex m-auto justify-content-center"
          style={{ width: "50vw" }}
        >
          <div className="mb-3 mr-3">
            <label for="columns">Columns</label>
            <input
              type="number"
              max={10}
              min={2}
              placeholder="5"
              style={{ paddingLeft: 5 }}
            />
          </div>

          <div className="mb-3">
            <label for="Rows">Rows</label>
            <input
              type="number"
              max={10}
              min={2}
              placeholder="5"
              style={{ paddingLeft: 5 }}
            />
          </div>
        </div>

        {this.props.user ? <UploadImage /> : null}

        <div className="mt-4">
          <Link to="/game" class="btn btn-primary">
            Play
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(StartGame));
