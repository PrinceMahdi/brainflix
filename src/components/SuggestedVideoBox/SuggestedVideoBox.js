// <------------- SCSS IMPORTS ------------->
import "./SuggestedVideoBox.scss";
// <------------- COMPONENT IMPORTS ------------->
import SuggedtedVideo from "../SuggestedVideo/SuggestedVideo";
// <------------- REACT IMPORTS ------------->
import { Link } from "react-router-dom";

const SuggestedVideoBox = ({ videos, videoDetails }) => {
  return (
    <div className="suggested__container">
      <h5 className="suggested__container-title">NEXT VIDEOS</h5>

      {/* Filtering through the videos array to remove the main video from the side videos */}
      {/* mapping through the filtered array */}
      {videos
        .filter((video) => video.id !== videoDetails.id)
        .map((video) => {
          return (
            <div key={video.id}>
              {/* Adding the id of the video as the URL */}
              <Link to={`/${video.id}`}>
                <SuggedtedVideo video={video} />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default SuggestedVideoBox;
