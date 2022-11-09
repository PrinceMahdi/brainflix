// <------------- SCSS IMPORTS ------------->
import "./Video.scss";
// <------------- FUNCTION IMPORTS ------------->
// import { getVideosDetails } from "../../utils/utils";

const Video = ({ videoDetails }) => {
  return (
    <div className="main__video__container">
      <video controls poster={videoDetails.image} className="video">
        If you don't see a video here, your browser doesn't support videos.
      </video>
    </div>
  );
};

export default Video;
