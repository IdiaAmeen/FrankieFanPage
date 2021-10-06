import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import soundfile from "./song.mp3";
export default class Music extends Component {
  state = {
    play: false,
  };
  componentDidMount() {
    this.setState({
      play: true,
    });
  }
  render() {
    return (
      <ReactAudioPlayer
        src={soundfile}
        preload
        autoplay
        controls
        onPlay={(e) => console.log("onPlay")}
      />
    );
  }
}
