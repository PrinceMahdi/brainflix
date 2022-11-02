import "./Main.scss";
import Video from "../Video/Video";
import VideoInfo from "../VideoInfo/VideoInfo";

const Main = () => {
  return (
    <>
      <main className="main">
        <section className="main--left">
          <Video />
          <VideoInfo />
        </section>
        <section className="main--right">

        </section>
      </main>
    </>
  );
};

export default Main;
