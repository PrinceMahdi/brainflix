import "./SuggestedVideoBox.scss";
import SuggedtedVideo from "../SuggestedVideo/SuggestedVideo";

const SuggestedVideoBox = () => {
  return (
    <>
      <div className="suggested__container">
        <h5 className="suggested__container-title">NEXT VIDEOS</h5>
        <SuggedtedVideo />
        <SuggedtedVideo />
        <SuggedtedVideo />
      </div>
    </>
  );
};

export default SuggestedVideoBox;
