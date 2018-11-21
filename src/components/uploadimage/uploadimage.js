
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import './uploadimage.css'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function UploadForm(props) {
  const { classes } = props;
  return (
    <div className="uploadform">
      <form action="/" enctype="multipart/form-data" method="post">


         <input type="file" name="file-to-upload" className="form-control-file center"/>
         <Button type="submit" value="Upload" variant="contained" color="default" className={classes.button}>
           Upload
           <CloudUploadIcon className={classes.rightIcon} />
         </Button>
       </form>

    </div>
  );
}

UploadForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadForm);
