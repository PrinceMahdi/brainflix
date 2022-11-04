import "./Video.scss";
import { getVideosDetails } from "../../utils/utils";

const Video = ({ videos, videoId }) => {

  const currentVid = getVideosDetails(videoId);

  return (
    <div className="main__video__container">
      <video controls poster={currentVid.image} className="video">
        If you don't see a video here, your browser doesn't support videos.
      </video>
    </div>
  );
};

export default Video;
