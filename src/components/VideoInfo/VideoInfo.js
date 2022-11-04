import "./VideoInfo.scss";

const VideoInfo = ({ videoDetails }) => {
  const {
    channel,
    comments,
    description,
    duration,
    id,
    likes,
    timestamp,
    title,
    video,
    views,
    ...rest
  } = videoDetails;

  return (
    <>
      <div className="video__info">
        <h1 className="video__info-title">{title}</h1>
        <div className="video__info-container">
          <div className="video__info--left">
            <p className="video__info-artist">{channel}</p>
            <p className="video__info-date">{timestamp}</p>
          </div>
          <div className="video__info--right">
            <div className="video__info__view-container">
              <div className="video__info__view-icon"></div>
              <p className="video__info__view-counter">{views}</p>
            </div>
            <div className="video__info__like-container">
              <div className="video__info__like-icon"></div>
              <p className="video__info__like-counter">{likes}</p>
            </div>
          </div>
        </div>
        <p className="video__info-description">{description}</p>
      </div>
    </>
  );
};

export default VideoInfo;
