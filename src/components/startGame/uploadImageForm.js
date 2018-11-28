import React, { Component, Fragment } from "react";

class UploadImageForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
			value: null
    }
    this.handleChange = this.handleChange.bind(this);
		this.handleReset = this.handleReset.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
	}
	handleReset(event){
		this.setState({
			file: URL.revokeObjectURL(this.state.file),
			value: ''
		})
  }

  render() {
    return (
			<Fragment>
	      <div>
	        <input type="file" onChange={this.handleChange} value={this.state.value}/>
	        <img src={this.state.file}/>
	      </div>
				<button onClick={this.handleReset}>reset</button>
			</Fragment>
    )
  }
}

export default UploadImageForm
