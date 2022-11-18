// <------------- SCSS IMPORTS ------------->
import "./Video.scss";

//use ref passed into video component ref = video ref
// click hander videoref.current.load()

const Video = ({ videoDetails }) => {
  return (
    <div className="main__video__container">
      <video
        controls
        poster={videoDetails.image}
        className="video"
        // to stop the video when you choose a different video
        key={videoDetails.id}
      >
        <source
          src={`https://project-2-api.herokuapp.com/stream?api_key=${process.env.REACT_APP_API_KEY}`}
        />
        If you don't see a video here, your browser doesn't support videos.
      </video>
    </div>
  );
};

export default Video;
