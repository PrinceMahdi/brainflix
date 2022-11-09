// <------------- SCSS IMPORTS ------------->
import "./VideoInfo.scss";
// <------------- FUNCTION IMPORTS ------------->
import { dynamicDate } from "../../utils/utils";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

const VideoInfo = ({ videoDetails }) => {
  return (
    <>
      <div className="video__info">
        <h1 className="video__info-title">{videoDetails.title}</h1>
        <div className="video__info-container">
          <div className="video__info--left">
            <p className="video__info-artist">By {videoDetails.channel}</p>
            <p className="video__info-date">
              {dynamicDate(videoDetails.videoDate)}
            </p>
          </div>
          <div className="video__info--right">
            <div className="video__info__view-container">
              <div className="video__info__view-icon"></div>
              <p className="video__info__view-counter">{videoDetails.views}</p>
            </div>
            <div className="video__info__like-container">
              <div className="video__info__like-icon"></div>
              <p className="video__info__like-counter">{videoDetails.likes}</p>
            </div>
          </div>
        </div>
        <p className="video__info-description">{videoDetails.description}</p>
      </div>
    </>
  );
};

export default VideoInfo;
