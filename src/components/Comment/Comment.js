import "./Comment.scss";
import CommentCard from "../CommentCard/CommentCard";

const Comment = ({ videoDetails }) => {
  // Grabbing the length of each comment array so I can set it 
  // dynamically on line 9

  let numberOfComments = videoDetails.comments.length;
  return (
    <div className="comment">
      <h5 className="comment__title">{numberOfComments} COMMENTS</h5>
      <article className="comment__form-container">
        <div className="comment__form-icon"></div>
        <form className="comment__form" id="form">
          <label htmlFor="comment" className="comment__form__label">
            JOIN THE CONVERSATION
          </label>
          <br></br>
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
      {videoDetails.comments.map((comment) => (
        <CommentCard comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default Comment;
