import { useEffect, useState } from "react";
import { getCurrentReview, patchReview } from "../utils/api";

function CurrentReview({ review_id, createdReviewId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentReview, setCurrentReview] = useState({});
  const [newReviewLikes, setNewReviewLikes] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getCurrentReview(review_id, createdReviewId)
      .then((results) => {
        setCurrentReview(results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [review_id, createdReviewId]);

  const likeReview = () => {
    setNewReviewLikes((newReviewLikes) => newReviewLikes + 1);
    patchReview(review_id);
  };

  if (isLoading)
    return <p hidden={createdReviewId ? false : true}>Loading...</p>;

  return (
    <div id="current_review_body">
      <p>{currentReview.category}</p>
      <p>{currentReview.title}</p>
      <p>{currentReview.owner}</p>
      <p>{currentReview.review_body}</p>
      <img src={currentReview.review_img_url} alt="review"></img>
      <p>{currentReview.created_at}</p>
      <button hidden={createdReviewId ? true : false} onClick={likeReview}>
        Kudos: {currentReview.votes + newReviewLikes}
      </button>
    </div>
  );
}

export default CurrentReview;
