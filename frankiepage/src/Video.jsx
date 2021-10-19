import React from "react";
import VideoPlayer from "react-video-js-player";

import FrankieVid from "./FrankieVid.mp4";

export default function VideoJS() {
  const videoSrc = FrankieVid;

  return (
    <div className="videos">
      {/* {Videos.map((video) => (
        <div className="videos" key={video.src}>
          <VideoPlayer src={video.src} />{" "}
        </div>
      ))} */}
      <VideoPlayer
        src={videoSrc}
        width={500}
        height={500}
        poster="https://i.imgur.com/E6CHsw6.jpg"
      />
    </div>
  );
}
