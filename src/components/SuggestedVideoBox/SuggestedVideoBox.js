// <------------- SCSS IMPORTS ------------->
import "./SuggestedVideoBox.scss";
// <------------- COMPONENT IMPORTS ------------->
import SuggedtedVideo from "../SuggestedVideo/SuggestedVideo";

const SuggestedVideoBox = ({ videos, videoDetails }) => {
  return (
    <div className="suggested__container">
      <h5 className="suggested__container-title">NEXT VIDEOS</h5>

      {videos
        .filter((video) => video.id !== videoDetails.id)
        .map((video) => {
          return (
            <div key={video.id}>
              <SuggedtedVideo video={video} />
            </div>
          );
        })}
    </div>
  );
};

export default SuggestedVideoBox;
