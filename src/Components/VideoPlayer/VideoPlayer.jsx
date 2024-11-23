import "./VideoPlayer.css";
import video from "../../assets/uni-video.mp4";
import React, { useRef } from "react";

const VideoPlayer = ({ playerState, setPlayerState }) => {
  const player = useRef(null);

  // Function to close the player when clicking outside the video
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayerState(false);
    }
  };

  return (
    <div
      className={`video-player ${playerState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
