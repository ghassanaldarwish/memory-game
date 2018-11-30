import React, {Component, Fragment} from "react";

// import classNames from 'classnames';
import {withStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import {connect} from "react-redux";
import * as actions from "../../store/actions";
import axios from "axios";
// import Spinner from "../common/spinner/spinner";
// import Images from './Images';
// import Buttons from './Buttons';
import UploadImageForm from './uploadImageForm'

import "./startGame.css";

const styles = {
	row: {
		display: "flex",
		justifyContent: "center"
	},
	avatar: {
		margin: 10
	},
	bigAvatar: {
		width: 120,
		height: 120
	}
};

class StartGame extends Component {

	state = {
    loading: false,
		imgData: [
			{
				name: 'image1',
				filedata: null,
				imgUrl: null

			}, {
				name: 'image2',
				filedata: null,
				imgUrl: null
			}, {
				name: 'image3',
				filedata: null,
				imgUrl: null
			}, {
				name: 'image4',
				filedata: null,
				imgUrl: null
			}, {
				name: 'image5',
				filedata: null,
				imgUrl: null
			}, {
				name: 'image6',
				filedata: null,
				imgUrl: null
			}, {
				name: 'image7',
				filedata: null,
				imgUrl: null
			}, {
				name: 'image8',
				filedata: null,
				imgUrl: null
			}
		]

	}

	onSubmitHandler = e => {
		e.preventDefault();


			let formData = new FormData();

			formData.append("gameImgs", this.state.imgData);
			this.state.imgData.map(item=>{
				formData.append("gameImgs", item.filedata);	
			})
			
			this.setState({loading: true});
			// send data to BE
			 axios({
				url: "https://memory-game-7.herokuapp.com/game/game-data/" + this.props.user.id,
				method: "POST",
				headers: {
					"Content-Type": "multipart/form-data"
				},
				data: formData
			}).then(res=> {
				this.setState({loading: false});
				// this.props.onImgsData(imgsData.data)
				console.log('data from backend',res.data)
				this.props.onImgsData(res.data)

			}).catch(e => {
				console.log(e)
				this.setState({loading: false});
				this.props.history.push("/startGame");
			}); 
			console.log('imgs file submited', this.state.imgData)



	};

	onChangeHandler = (e) => {
		console.log('Change Handler')
		const updateState = {
			...this.state,
			imgData: [...this.state.imgData]

		}
		const newimgData = updateState.imgData.map(item => {
			if (item.name === e.target.name) {
				item.filedata = e.target.files[0]
				item.imgUrl = URL.createObjectURL(e.target.files[0])
			}
		})
		this.setState({imgData: updateState.imgData})
		console.log(updateState)
		console.log({
			[e.target.name]: e.target.files[0]
		})
	}

	render() {
		const checkArrayLength = this.state.imgData.filter(item => item.filedata !== null).length
		console.log(this.state.imgData)
		return (<div>
			<div className='buttons'>

				<Fragment>
					<p>{checkArrayLength}</p>
					<form onSubmit={this.onSubmitHandler} className="container" style={{
							marginTop: 125
						}} encType="multipart/form-data">
						<UploadImageForm onChange={this.onChangeHandler} imgData={this.state.imgData}/>
						<button disabled={checkArrayLength !== 8} type="submit">upload{checkArrayLength}</button>
					</form>
					{this.props.gameImgsData && <p> https://ghassanooooo.github.io/customise-memory-game/{this.props.gameImgsData.user}</p>}
				</Fragment>

			</div>
		</div>)
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
	gameImgsData:state.gameImgsData
});

export default connect(mapStateToProps, actions)(withStyles(styles)(StartGame));
