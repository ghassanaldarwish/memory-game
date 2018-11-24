import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  row: {
    display: "inline-flex",
    justifyContent: "center"
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    props.avatar && (
      <div className={classes.row}>
        <Avatar alt="Remy Sharp" src={props.avatar} />
      </div>
    )
  );
}

export default withStyles(styles)(ImageAvatars);
