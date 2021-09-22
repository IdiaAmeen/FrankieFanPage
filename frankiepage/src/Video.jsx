import React from "react";
import VideoPlayer from "react-video-js-player";

import MERCEE from "./MERCEE.mp4";

export default function VideoJS() {
  const videoSrc = MERCEE;

  return (
    <div className="videos">
      {/* {Videos.map((video) => (
        <div className="videos" key={video.src}>
          <VideoPlayer src={video.src} />{" "}
        </div>
      ))} */}
      <VideoPlayer
        src={videoSrc}
        width={250}
        height={350}
        poster="https://i.imgur.com/GXNnHmD.jpg"
      />
    </div>
  );
}
