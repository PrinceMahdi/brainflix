// <--------------------- REACT IMPORTS --------------------->
import { useState } from "react";

// <--------------------- FUNCTION IMPORTS --------------------->
import { getVideos, getVideosDetails } from "./utils/utils";

// <--------------------- COMPONENT IMPORTS --------------------->
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Video from "./components/Video/Video";
import Comment from "./components/Comment/Comment";
import SuggestedVideoBox from "./components/SuggestedVideoBox/SuggestedVideoBox";
import VideoInfo from "./components/VideoInfo/VideoInfo";

const App = () => {
  // Setting the default video on refresh the first video from the data file
  const firstVideoID = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const [videoId, setVideoId] = useState(firstVideoID);

  const [videos, setVideos] = useState(getVideos(videoId));
  const [videoDetails, setVideoDetails] = useState(getVideosDetails(videoId));

  const onClick = (clickEvent, videoIdClickedOn) => {
    setVideoId(videoIdClickedOn);
    setVideos(getVideos(videoIdClickedOn));
    setVideoDetails(getVideosDetails(videoIdClickedOn));
  };

  return (
    <>
      <Header />
      <Video videoId={videoId} />
      <main className="main">
        <section className="main--left">
          <VideoInfo videoDetails={videoDetails} />
          <Comment videoDetails={videoDetails} />
        </section>
        <section className="main--right">
          <SuggestedVideoBox videos={videos} onClick={onClick} />
        </section>
      </main>
    </>
  );
};

export default App;
