import "./UploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

const UploadPage = () => {
  return (
    <>
      <section className="upload-page">
        <h1 className="upload-page__header">Upload Video</h1>
        <div className="section-wrapper">
          <div className="video-container">
            <p className="video-container__title">VIDEO THUMBNAIL</p>
            <img src={thumbnail} className="video-container__image"></img>
          </div>
          <form className="form-container">
            <div className="video__header-container">
              <p className="video__header">TITLE YOUR VIDEO</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="video__header-input"
                placeholder="Add a title to your video"
              ></textarea>
            </div>
            <div className="video__description-container">
              <p className="video__description-title">
                ADD A VIDEO DESCRIPTION
              </p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="video__description-input"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
            <div className="video__button-wrapper">
              <Link to={"/uploadSuccess"}>
                <button className="video__publish-button">PUBLISH</button>
              </Link>
              <Link to={"/"}>
                <button className="video__cancel-button">CANCEL</button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UploadPage;
