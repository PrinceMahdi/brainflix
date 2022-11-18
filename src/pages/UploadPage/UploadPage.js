/* ---------------- SCSS IMPORTS ---------------- */
import "./UploadPage.scss";
/* ---------------- ASSET IMPORTS ---------------- */
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
/* ---------------- REACT IMPORTS ---------------- */
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
/* ---------------- REACT UPLOADER PACKAGE IMPORTS ---------------- */
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const uploader = Uploader({
  apiKey: "free",
});
const options = { multi: true };

const UploadPage = () => {
  // Navigating to the home page after 2.5 seconds of video uploading
  const navigate = useNavigate();
  const submitHandler = (e) => {
    // preventing default on the form
    e.preventDefault();

    // if the input forms are empty, give a warning
    if (!e.target.videoTitle.value || !e.target.videoDescription.value) {
      alert("Please complete the fields before proceeding...");
    } else {
      let newVideo = {
        id: uuidv4(),
        title: e.target.videoTitle.value,
        channel: "Brainflix",
        image: "http://localhost:8080/images/Upload-video-preview.jpg",
        description: e.target.videoDescription.value,
        views: "2,013,044",
        likes: "151,475",
        duration: "1:01",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: [
          {
            name: "Micheal Lyons",
            comment:
              "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
            id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
            likes: 0,
            timestamp: 1545162149000,
          },
          {
            name: "Gary Wong",
            comment:
              "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
            likes: 0,
            timestamp: 1544595784046,
          },
          {
            name: "Theodore Duncan",
            comment:
              "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
            likes: 0,
            timestamp: 1542262984046,
          },
        ],
      };
      axios
        .post("http://localhost:8080/videos/post", newVideo)
        .then(() => {
          navigate("/uploadSuccess");
        })
        .then((response) => {
          setTimeout(() => {
            navigate("/");
          }, 2500);
        })
        .catch((error) => {
          console.log(`::: Something went wrong posting video ::: ${error}`);
        });
    }
  };
  return (
    <>
      <section className="upload-page">
        <h1 className="upload-page__header">Upload Video</h1>
        <div className="section-wrapper">
          <div className="video-container">
            <p className="video-container__title">VIDEO THUMBNAIL</p>
            <img
              src={thumbnail}
              alt="thumbnail"
              className="video-container__image"
            ></img>
          </div>
          <form className="form-container" onSubmit={(e) => submitHandler(e)}>
            <div className="video__header-container">
              <p className="video__header">TITLE YOUR VIDEO</p>
              <textarea
                name="videoTitle"
                id="videoTitle"
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
                name="videoDescription"
                id="videoDescription"
                cols="30"
                rows="10"
                className="video__description-input"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
            <div className="video__button-wrapper">
              {/* Linking to the upload success page */}

              <UploadButton
                uploader={uploader} // Required.
                options={options} // Optional.
                onComplete={(files) => {
                  // Optional.
                  if (files.length === 0) {
                    console.log("No files selected.");
                  } else {
                    console.log("Files uploaded:");
                    console.log(files.map((f) => f.fileUrl));
                  }
                }}
              >
                {({ onClick }) => (
                  <button onClick={onClick} className="video__publish-button">PUBLISH</button>
                )}
              </UploadButton>

              {/* Linking to the home page */}
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
