import { useEffect, useState } from "react";
import { getCurrentReview, patchReview } from "../utils/api";
import "../component-css/CurrentReviewBody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function CurrentReview({ review_id }) {
  const [currentReview, setCurrentReview] = useState({});
  const [newReviewLikes, setNewReviewLikes] = useState(0);
  const [voted, setVoted] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setErr(false);
    getCurrentReview(review_id)
      .then((results) => {
        setCurrentReview(results);
      })
      .catch((err) => {
        setErr(true);
      });
  }, [review_id]);

  const likeReview = () => {
    setVoted(true);
    const incVotes = 1;
    setNewReviewLikes((newReviewLikes) => newReviewLikes + 1);
    patchReview(review_id, incVotes);
  };

  const dislikeReview = () => {
    setVoted(true);
    const incVotes = -1;
    setNewReviewLikes((newReviewLikes) => newReviewLikes - 1);
    patchReview(review_id, incVotes);
  };

  return (
    <section id="cr">
      <div id="current-review-body">
        <p id="cr-title">{currentReview.title}</p>
        <div id="cr-main-body">
          <img
            id="cr-img"
            src={currentReview.review_img_url}
            alt="review"
          ></img>
          <p id="cr-body">{currentReview.review_body}</p>
          <p id="cr-date">{currentReview.created_at}</p>
          <p id="cr-owner">{currentReview.owner}</p>
          <div id="cr-info">
            <button className="like dis" disabled={voted} onClick={likeReview}>
              <FontAwesomeIcon id="thumbs-up" icon={faThumbsUp} />
            </button>
            <button className="like" disabled={voted} onClick={dislikeReview}>
              <FontAwesomeIcon id="thumbs-down" icon={faThumbsDown} />
            </button>
            <p id="cr-votecount">
              Likes {currentReview.votes + newReviewLikes}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentReview;
