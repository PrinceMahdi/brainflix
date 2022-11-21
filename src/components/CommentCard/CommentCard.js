// <------------- SCSS IMPORT ------------->
import "./CommentCard.scss";
// <------------- FUNCTION IMPORTS ------------->
import { randomAvatar } from "../../utils/utils";
import { dynamicDate } from "../../utils/utils";

const CommentCard = ({ comment, name, date, videoDetails }) => {
  return (
    <div className="user__card">
      <div
        className="user__icon"
        // Adding a random avatar through an API
        style={{
          backgroundImage: `url(${randomAvatar()})`,
        }}
      ></div>
      <div className="user__info">
        <div className="user__details">
          <p className="user__name">{name}</p>
          {/* Converting the timestamp to a Number making sure it works for when I add the comment functionality */}
          <p className="user__date">{dynamicDate(Number(date))}</p>
        </div>
        <div className="user-comment__container">
          <p className="user__comment">{comment}</p>
          <div className="user__comment__delete-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
