/* ---------------- SCSS IMOPRTS ---------------- */
import "./SuggestedVideo.scss";

const SuggestedVideo = ({ video }) => {
  return (
    <div className="video__container">
      <img
        className="video__thumbnail"
        src={video.image}
        alt="Video Thumbnail"
      ></img>
      <div className="video__stats">
        <p className="video__title">{video.title}</p>
        <p className="video__artist">{video.channel}</p>
      </div>
    </div>
  );
};

export default SuggestedVideo;
