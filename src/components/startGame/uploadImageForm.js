import React, { Component, Fragment } from "react";
import Checkbox from "./checkbox";

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
            <div key={i} class="col-md-3 col-sm-4 col-6 mb-4">
              <div
                class="card"
                style={{
                  width: "200px",
                  height: item.filedata ? "200px" : "75px"
                }}
              >
                {item.imgUrl && (
                  <img
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
