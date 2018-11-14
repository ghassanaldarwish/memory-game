import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'inline-flex',
    justifyContent: 'center',
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="Remy Sharp" src='https://cdn.europosters.eu/image/750/posters/death-note-apple-i30384.jpg'  />
    </div>
  );
}

export default withStyles(styles)(ImageAvatars);