import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Gift from "./Gift";
import Video from "./Video";
import Music from "./music/Music";
import ReactAudioPlayer from "react-audio-player";
import song from "./music/song.mp3";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDisplay: false };
  }
  handleClick = () => {
    this.setState({
      isDisplay: true,
    });
  };
  handleClose = () => {
    this.setState({
      isDisplay: false,
    });
  };
  render() {
    return (
      <img
        src="https://image.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg"
        alt="comingsoon"
      />

      // <div className="App">
      //   <header className="App-header">
      //     <Route exact path="/">
      //       <div className="balloons">
      //         <div class="balloon"></div>
      //         <div class="balloon"></div>
      //         <div class="balloon"></div>
      //         <div class="balloon"></div>
      //         <div class="balloon"></div>
      //         <div class="balloon"></div>
      //         <div class="balloon"></div>
      //       </div>

      //       <img
      //         src="https://media.giphy.com/media/xDk2ZOgr8Tc0qexRWH/giphy.gif?cid=790b7611a331969841f6f55b5d49a51f77e96fcf28177c69&rid=giphy.gif&ct=g"
      //         id="avi"
      //       />
      //       <div className="gifs-box">
      //         <img src="https://i.imgflip.com/5p9825.gif" class="gif" />
      //         <img src="https://i.imgflip.com/5p97cl.gif" class="gif" />
      //         <img src="https://i.imgflip.com/5pdqkt.gif" class="gif" />

      //         <img src="https://i.imgflip.com/5pdo1r.gif" class="gif" />
      //         <img src="https://i.imgflip.com/5p9857.gif" class="gif" />
      //       </div>

      //       <p id="greeting">Happy Birthday Frankie!</p>
      //       <div className="drop-down">
      //         {this.state.isDisplay && <Gift handleClose={this.handleClose} />}
      //       </div>
      //       {/* <Link to="/video" id="enter">
      //         Enter
      //       </Link> */}

      //       <button className="nav-services-icons" onClick={this.handleClick}>
      //         Open
      //       </button>
      //       {/*
      //       <ReactAudioPlayer src={song} preload autoplay controls /> */}
      //       {/* <Music /> */}
      //       {/* {*/}
      //       {/* <a href="https://instagram.com/_frankiesnape?utm_medium=copy_link">
      //       instagram
      //     </a>
      //     <a href="https://twitter.com/FranklinSnape">twitter</a> */}
      //     </Route>
      //     <Route exact path="/video">
      //       <Video />
      //     </Route>
      //   </header>
      // </div>
    );
  }
}

export default App;
