/* ---------------- SCSS IMOPRTS ---------------- */
import "./SuggestedVideo.scss";

const SuggestedVideo = ({ videos, onClick }) => {
  return (
    <div
      className="video__container"
      onClick={(clickEvent) => onClick(clickEvent, videos.id)}
    >
      <img
        className="video__thumbnail"
        src={videos.image}
        alt="Video Thumbnail"
      ></img>
      <div className="video__stats">
        <p className="video__title">{videos.title}</p>
        <p className="video__artist">{videos.channel}</p>
      </div>
    </div>
  );
};

export default SuggestedVideo;
