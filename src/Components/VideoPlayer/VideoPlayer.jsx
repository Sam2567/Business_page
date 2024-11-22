import "./VideoPlayer.css";
import video from "../../assets/uni-video.mp4";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video src={video} autoPlay mute controls></video>
    </div>
  );
};

export default VideoPlayer;
