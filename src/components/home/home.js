import React, { Component } from "react";
import "./home.css";
import homer from "../../assets/homer.jpg";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home bg-overlay container-fluid ">
        <div className="m-auto">
          <h1>How good is your memory ???</h1>

          <img src={homer} alt="oh noo" />
          <h2>Create your own interactive memory game</h2>
          <ul className="ulist">
            <li>upload your own images with just a few clicks</li>
            <li>choose the size of the game</li>
            <li>invite your friends to play</li>
          </ul>

          <p>Give it a try push START</p>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(withRouter(Home));

// import React from 'react';
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
// function Home(props) {
//   const { classes } = props;
//
//   return (
//     <div>
//       <Paper className={classes.root} elevation={1}>
//         <Typography variant="headline" component="h3">
//           This is a sheet of paper.
//         </Typography>
//         <Typography component="p">
//           <div className="Home bg-overlay container-fluid">
//             <div className="m-auto">
//               <h1>How good is your memory ???</h1>
//
//               <img src={homer} alt="oh noo"/>
//               <h2>Create your own interactive memory game</h2>
//               <ul className="ulist">
//                 <li>upload your own images with just a few clicks</li>
//                 <li>choose the size of the game</li>
//                 <li>invite your friends to play</li>
//               </ul>
//
//               <p>Give it a try push START</p>
//             </div>
//
//           </div>
//         </Typography>
//       </Paper>
//     </div>
//   );
// }
//
// Home.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(Home);
