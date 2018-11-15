import React, { Component } from "react";
import "./profile.css";
import homer from "../../assets/homer.jpg";
// import paperLayout from "../common/paperLayout/paperLayout";
//
class Profile extends Component {
  render() {
    return (

      <paperLayout>
        <div className="container">
          <div class="card text-center  bg-dark">
            <div class="card-header bg-dark">

            </div>
            <div class="card-body bg-info">
              <img class="card-img homer" src={homer} alt="Card image"/>
              <h5 class="card-title">Hello Username</h5>
              <label for="name">Username: </label>
              <input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10"/>
              <p class="card-text">your email adress is : user @email.com</p>

              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">

            </div>
          </div>
        </div>

      </paperLayout>
    );
  }
}

export default Profile;

// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
//
// const styles = theme => ({
//   root: {
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit * 2,
//     paddingBottom: theme.spacing.unit * 2,
//   },
// });
//
// function UserProfile(props) {
//   const { classes } = props;
//
//   return (
//     <div className="container">
//       <Paper className={classes.root} elevation={1}>
//         <Typography variant="headline" component="h3">
//           Welcome to your profile
//         </Typography>
//         <Typography component="p">
//           Paper can be used to build surface or other elements for your application.
//         </Typography>
//       </Paper>
//     </div>
//   );
// }
//
// UserProfile.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(UserProfile);
