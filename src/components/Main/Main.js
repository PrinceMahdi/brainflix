import "./Main.scss";
import Video from "../Video/Video";
import VideoInfo from "../VideoInfo/VideoInfo";
import Comment from "../Comment/Comment";
import SuggestedVideoBox from "../SuggestedVideoBox/SuggestedVideoBox";

const Main = () => {
  return (
    <>
      <Video />
      <main className="main">
        <section className="main--left">
          <VideoInfo />
          <Comment />
        </section>
        <section className="main--right">
          <SuggestedVideoBox />
        </section>
      </main>
    </>
  );
};

export default Main;
