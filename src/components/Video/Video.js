import "./Video.scss";
import placeholder from "../../assets/images/Mohan-muruge.jpg";

const Video = () => {
  return (
    <>
      <div className="main__video__container">
        <video controls poster={placeholder} className="video">
          If you don't see a video here, your browser doesn't support videos.
        </video>
      </div>
    </>
  );
};

export default Video;
