import React from "react";

import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
// import purple from "@material-ui/core/colors/purple";

const styles = theme => ({
  progress: {
    margin: " auto"
  }
});

function Spinner(props) {
  const { classes } = props;
  return (
    <div style={{ display: "flex" }}>
      <CircularProgress
        size={100}
        className={classes.progress}
        color="secondary"
        thickness={7}
      />
    </div>
  );
}

export default withStyles(styles)(Spinner);
