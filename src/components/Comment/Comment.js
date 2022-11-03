import "./Comment.scss";
import CommentCard from "../CommentCard/CommentCard";

const Comment = () => {
  return (
    <>
      <div className="comment">
        <h5 className="comment__title">3 Comments</h5>
        <article className="comment__form-container">
          <div className="comment__form-icon"></div>
          <form className="comment__form" id="form">
            <label for="comment" className="comment__form__label">
              JOIN THE CONVERSATION
            </label>
            <br />
            <textarea
              className="comment__form__input"
              placeholder="Add a new comment"
              name="userComment"
              id="comment"
              cols="20"
              rows="5"
            ></textarea>
            <div className="comment__form__label--medium-container">
              <label for="comment" className="comment__form__label--medium">
                JOIN THE CONVERSATION
              </label>
              <textarea
                className="comment__form__input--medium"
                placeholder="Add a new comment"
                name="userComment"
                id="comment"
                cols="50"
                rows="5"
              ></textarea>
            </div>
            <div className="comment__form__label--large-container">
              <label for="comment" className="comment__form__label--large">
                JOIN THE CONVERSATION
              </label>
              <textarea
                className="comment__form__input--large"
                placeholder="Add a new comment"
                name="userComment"
                id="comment"
                cols="56"
                rows="5"
              ></textarea>
            </div>

            <div className="comment__form-button-container">
              <div className="comment__form__button-icon"></div>
              <button className="comment__form-button">COMMENT</button>
            </div>
          </form>
        </article>
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </>
  );
};

export default Comment;
