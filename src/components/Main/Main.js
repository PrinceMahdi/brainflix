import "./Main.scss";
import Video from "../Video/Video";
import VideoInfo from "../VideoInfo/VideoInfo";
import Comment from "../Comment/Comment";

const Main = () => {
  return (
    <>
      <main className="main">
        <section className="main--left">
          <Video />
          <VideoInfo />
          <Comment />
        </section>
        <section className="main--right"></section>
      </main>
    </>
  );
};

export default Main;
