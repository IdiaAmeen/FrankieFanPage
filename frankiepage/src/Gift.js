import React, { Component } from "react";
import "./Gift.css";
import Video from "./Video";
export default class Gift extends Component {
  render() {
    return (
      <div>
        <div className="outer-modal">
          <div className="inner-modal">
            <div className="exit">
              <button onClick={this.props.handleClose} id="x">
                X
              </button>
            </div>
            <Video />
          </div>
        </div>
      </div>
    );
  }
}
