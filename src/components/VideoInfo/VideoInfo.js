import "./VideoInfo.scss";

const VideoInfo = () => {
  return (
    <>
      <div className="video__info">
        <h1 className="video__info-title">BMX Rampage: 2021 Highlights</h1>
        <div className="video__info-container">
          <div className="video__info--left">
            <p className="video__info-artist">By Red Crow</p>
            <p className="video__info-date">07/11/2021</p>
          </div>
          <div className="video__info--right">
            <div className="video__info__view-container">
              <div className="video__info__view-icon"></div>
              <p className="video__info__view-counter">1,001,023</p>
            </div>
            <div className="video__info__like-container">
              <div className="video__info__like-icon"></div>
              <p className="video__info__like-counter">110,985</p>
            </div>
          </div>
        </div>
        <p className="video__info-description">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
      </div>
    </>
  );
};

export default VideoInfo;
