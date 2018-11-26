import React, { Component , Fragment} from "react";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import axios from "axios";
import Spinner from "../../common/spinner/spinner";

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
  state = {
    gameImgsFile: [],
    loading: false
  };

  onChangeHandler = e => {
    this.setState({ gameImgsFile: e.target.files });
   
  };
  onSubmitHandler = e => {
    e.preventDefault();
 
    if(this.state.gameImgsFile.length === 5){
      let formData = new FormData();
      formData.append("gameImgs", this.state.gameImgsFile);
      this.setState({ loading: true });
      // send data to BE
      axios({
        url:
          "https://memory-game-7.herokuapp.com/game/game-data/" + this.props.user.id,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: formData
      })
        .then(imgsData => {
          this.setState({ loading: false });
          this.props.onImgsData(imgsData.data)
          console.log(imgsData.data)

        
        })
        .catch(e => {
          this.setState({ loading: false });
          this.props.history.push("/startGame");
        });
      console.log('imgs file submited',this.state.gameImgsFile)
   
    }

  };
  render() {
    const { classes } = this.props;
    console.log(this.state.gameImgsFile);

    return this.props.user && (
      <Fragment>
        <p>{this.state.gameImgsFile.length > 0 && this.state.gameImgsFile.length}</p>
        <form
        className="d-flex m-4"
        onSubmit={this.onSubmitHandler}
        enctype="multipart/form-data"
      >
          <input
            onChange={this.onChangeHandler}
            name="gameImgs"
            className="form-control-file center"
            type="file"
            multiple
          />

          <Button
         disabled={this.state.gameImgsFile.length !== 5 }
          type="submit"
          value="Upload"
          variant="contained"
          color="default"
        >
          Upload
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
        </form>
        </Fragment>
      )
   
      
  
  }
}
const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(UploadForm));


