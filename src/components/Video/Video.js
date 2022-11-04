import "./Video.scss";

const Video = ({ videos }) => {
  return (
    <div className="main__video__container">
      <video controls poster={videos.image} className="video">
        If you don't see a video here, your browser doesn't support videos.
      </video>
    </div>
  );
};

export default Video;
