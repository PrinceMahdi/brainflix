// <------------- SCSS IMPORTS ------------->
import "./Comment.scss";
// <------------- COMPONENT IMPORTS ------------->
import CommentCard from "../CommentCard/CommentCard";

// <------------- REACT IMPORTS ------------->
import axios from "axios";

const Comment = ({ videoDetails, setVideoDetails, BACKEND_URL }) => {
  // Adding the length of comments if it's not undefined
  let commentLength = videoDetails.comments?.length;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("ftest");
    if (!e.target.userComment.value) {
      alert("Please type something before proceeding...");
    } else {
      let newComment = {
        comment: e.target.userComment.value,
        likes: 0,
        timestamp: Date.now(),
      };
      axios
        .post(`${BACKEND_URL}/videos/${videoDetails.id}/comments`, newComment)
        .then((response) => {
          setVideoDetails(response.data);
        });
      e.target.reset();
    }
  };

  return (
    <div className="comment">
      <h5 className="comment__title">{commentLength} Comments</h5>
      <article className="comment__form-container">
        <div className="comment__form-icon"></div>
        <form className="comment__form" id="form" onSubmit={handleSubmit}>
          <div className="comment__form-container--top">
            <label htmlFor="comment" className="comment__form__label">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="comment__form__input"
              placeholder="Add a new comment"
              name="userComment"
              id="comment"
              cols="20"
              rows="5"
            ></textarea>
          </div>

          <div className="comment__form-button-container-mobile">
            <button className="comment__form-button">COMMENT</button>
          </div>
          <div className="comment__form-button-container">
            <button className="comment__form-button">COMMENT</button>
          </div>
        </form>
      </article>
      {/* Mapping throught the comments array only if it's not undefined */}
      {videoDetails.comments?.map((data) => (
        <CommentCard
          comment={data.comment}
          name={data.name}
          date={data.timestamp}
          key={data.id}
        />
      ))}
    </div>
  );
};

export default Comment;
