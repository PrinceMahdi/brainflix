import "./CommentCard.scss";
import { dateFormatter } from "../../utils/utils";

const CommentCard = ({ comment }) => {


  return (
    <div className="user__card">
      <div className="user__icon"></div>
      <div className="user__info">
        <div className="user__details">
          <p className="user__name">{comment.name}</p>
          <p className="user__date">{dateFormatter(comment.timestamp)}</p>
        </div>
        <div className="user-comment__container">
          <p className="user__comment">{comment.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
