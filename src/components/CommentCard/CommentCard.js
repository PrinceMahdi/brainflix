import "./CommentCard.scss";

const CommentCard = () => {
  return (
    <>
      <div className="user__card">
        <div className="user__icon"></div>
        <div className="user__info">
          <div className="user__details">
            <p className="user__name">Connor Walton</p>
            <p className="user__date">02/16/2021</p>
          </div>
          <div className="user-comment__container">
            <p className="user__comment">
              This is art. This is inexplicable magic expressed in the purest
              way, everything that makes up this majestic work deserves
              reverence. Let us appreciate this for what it is and what it
              contains.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
