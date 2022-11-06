// <------------- SCSS IMPORTS ------------->
import "./SuggestedVideoBox.scss";
// <------------- COMPONENT IMPORTS ------------->
import SuggedtedVideo from "../SuggestedVideo/SuggestedVideo";

const SuggestedVideoBox = ({ videos, onClick }) => {
  return (
    <div className="suggested__container">
      <h5 className="suggested__container-title">NEXT VIDEOS</h5>
      {videos.map((video) => (
        <SuggedtedVideo videos={video} key={video.id} onClick={onClick} />
      ))}
    </div>
  );
};

export default SuggestedVideoBox;
