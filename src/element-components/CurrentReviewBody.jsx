import { useEffect, useState } from "react";
import { getCurrentReview, patchReview } from "../utils/api";

function CurrentReview({ review_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentReview, setCurrentReview] = useState({});
  const [newReviewLikes, setNewReviewLikes] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getCurrentReview(review_id).then((results) => {
      setCurrentReview(results);
      setIsLoading(false);
    });
  }, [review_id]);

  const likeReview = () => {
    setNewReviewLikes((newReviewLikes) => newReviewLikes + 1);
    patchReview(review_id);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div id="current_review_body">
      <p>{currentReview.category}</p>
      <h1>{currentReview.title}</h1>
      <h2>{currentReview.owner}</h2>
      <h2>{currentReview.created_at}</h2>
      <img src={currentReview.review_img_url} alt="review"></img>
      <button onClick={likeReview}>
        Kudos: {currentReview.votes + newReviewLikes}
      </button>
    </div>
  );
}

export default CurrentReview;
