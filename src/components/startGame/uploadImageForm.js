import React, { Component, Fragment } from "react";
import Checkbox from "./checkbox";
import WOW from "wowjs";
import Drop from "../../assets/drop.mp3";

import ReactAudioPlayer from "react-audio-player";

class UploadImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      value: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    const wow = new WOW.WOW();

    wow.init();
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }
  handleReset(event) {
    this.setState({
      file: URL.revokeObjectURL(this.state.file),
      value: ""
    });
  }

  render() {
    return (
      <Fragment>
        {/* <Checkbox /> */}

        <div class="row container justify-content-center">
          {this.props.imgData.map((item, i) => (
            <div key={i} class={`col-md-3 col-sm-4 col-6 mb-4 wow  bounceIn`}>
              <ReactAudioPlayer src={Drop} autoPlay />
              <div
                class="card"
                style={{
                  width: "200px",
                  height: item.filedata ? "200px" : "75px"
                }}
              >
                {item.imgUrl && (
                  <img
                    className="wow bounceIn"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit"
                    }}
                    src={item.imgUrl}
                    alt=""
                  />
                )}
                <div class="card-body">
                  <input
                    style={{ width: "100%", height: "100%" }}
                    name={item.name}
                    onChange={this.props.onChange}
                    type="file"
                    value={this.state.value}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default UploadImageForm;
