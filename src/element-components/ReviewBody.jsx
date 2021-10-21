import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews, removeReview } from "../utils/api";

function ReviewBody({ category, currentUser }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getReviews(sortBy, category)
      .then((results) => {
        setReviews(results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category, sortBy]);

  const handleSortBy = (e) => {
    e.preventDefault();
    setSortBy(e.target.value);
  };

  const deleteReview = async (e) => {
    e.preventDefault();
    const review_id = e.target.value;
    removeReview(review_id)
      .then(() => {
        return getReviews(category, sortBy);
      })
      .then((result) => {
        setReviews(result);
        setIsLoading(false);
      });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <section>
        <form>
          <label htmlFor="review-sort">Sort By</label>
          <select
            defaultValue="selected"
            onChange={handleSortBy}
            name="review-sort"
            id="review-sort"
          >
            <option value="selected" disabled={true}>
              Select Option
            </option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
        </form>
      </section>
      <section>
        {reviews.map((review, index) => {
          return (
            <div key={index} className="review-box">
              <Link to={`/comments/${review.review_id}`}>
                <p>{review.category}</p>
                <h1>{review.title}</h1>
                <h2>{review.owner}</h2>
                <img src={review.review_img_url} alt="review"></img>
                <button
                  value={review.review_id}
                  onClick={deleteReview}
                  hidden={review.owner === currentUser ? false : true}
                >
                  Delete Review
                </button>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default ReviewBody;
