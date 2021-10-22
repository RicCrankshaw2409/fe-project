import { useEffect, useState } from "react";
import { getCurrentReview, patchReview } from "../utils/api";
import { errorMsg } from "../utils/helper-functions";
import { LoadingIcon } from "../bootstrap-components/LoadingIcon";

function CurrentReview({ review_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentReview, setCurrentReview] = useState({});
  const [newReviewLikes, setNewReviewLikes] = useState(0);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setErr(false);
    setIsLoading(true);
    getCurrentReview(review_id)
      .then((results) => {
        setCurrentReview(results);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(true);
      });
  }, [review_id]);

  const likeReview = () => {
    setNewReviewLikes((newReviewLikes) => newReviewLikes + 1);
    patchReview(review_id);
  };

  if (isLoading) return LoadingIcon();
  else if (err) return errorMsg;

  return (
    <div id="current_review_body">
      <p>{currentReview.category}</p>
      <p>{currentReview.title}</p>
      <p>{currentReview.owner}</p>
      <p>{currentReview.review_body}</p>
      <img src={currentReview.review_img_url} alt="review"></img>
      <p>{currentReview.created_at}</p>
      <button onClick={likeReview}>
        Kudos: {currentReview.votes + newReviewLikes}
      </button>
    </div>
  );
}

export default CurrentReview;
