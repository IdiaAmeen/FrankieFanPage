import React, { Component } from "react";
import "./Gift.css";
import Video from "./Video";
export default class Gift extends Component {
  render() {
    return (
      <div>
        <div className="outer-modal">
          <div className="inner-modal">
            <button onClick={this.props.handleClose}>X</button>
            <Video />
          </div>
        </div>
      </div>
    );
  }
}
