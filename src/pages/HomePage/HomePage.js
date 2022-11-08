// <--------------------- SCSS IMPORTS --------------------->
import "./HomePage.scss";
// <--------------------- COMPONENT IMPORTS --------------------->
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comment from "../../components/Comment/Comment";
import SuggestedVideoBox from "../../components/SuggestedVideoBox/SuggestedVideoBox";
import Video from "../../components/Video/Video";

// <--------------------- REACT IMPORTS --------------------->
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// <---------------------- FUNCTION IMPORTS ---------------------->
import { getVideos, getVideosDetails } from "../../utils/utils";

// <--------------------- API INFORMATION --------------------->
const url = `https://project-2-api.herokuapp.com/videos?api_key=${process.env.REACT_APP_API_KEY}`;

const HomePage = () => {
  //   const { videoId } = useParams();
  //   const { navigate } = useNavigate();

  // Setting the default video on refresh the first video from the data file
  const firstVideoID = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const [videoId, setVideoId] = useState(firstVideoID);

  const [videos, setVideos] = useState(getVideos(videoId));
  const [videoDetails, setVideoDetails] = useState(getVideosDetails(videoId));

  const searchVideoById = async (video) => {
    const response = await axios.get(url);
    // console.log(response)
  };

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await axios.get(url);
        console.log(data);
      } catch (error) {
        console.log("You got an error!", error);
      }
    };
    fetchDate();
  }, []);

  const onClick = (clickEvent, videoIdClickedOn) => {
    setVideoId(videoIdClickedOn);
    setVideos(getVideos(videoIdClickedOn));
    setVideoDetails(getVideosDetails(videoIdClickedOn));
  };

  return (
    <>
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

export default HomePage;
