// <------------- SCSS IMPORTS ------------->
import "./Comment.scss";
// <------------- COMPONENT IMPORTS ------------->
import CommentCard from "../CommentCard/CommentCard";

const Comment = ({ videoDetails }) => {
  // Adding the length of comments if it's not undefined
  let commentLength = videoDetails.comments?.length;

  return (
    <div className="comment">
      <h5 className="comment__title">{commentLength} Comments</h5>
      <article className="comment__form-container">
        <div className="comment__form-icon"></div>
        <form className="comment__form" id="form">
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
          <div className="comment__form-button-container-mobile">
            <div className="comment__form__button-icon-mobile"></div>
            <button className="comment__form-button">COMMENT</button>
          </div>
        </form>
        <div className="comment__form-button-container">
          <div className="comment__form__button-icon"></div>
          <button className="comment__form-button">COMMENT</button>
        </div>
      </article>
      {/* Mapping throught the comments array only if it's not undefined */}
      {videoDetails.comments?.map((data, index) => (
        <CommentCard
          comment={data.comment}
          name={data.name}
          date={data.timestamp}
          key={index}
        />
      ))}
    </div>
  );
};

export default Comment;
