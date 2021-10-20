import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../utils/api";

function ReviewBody({ category }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getReviews(sortBy)
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

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <section>
        <Link to="/newreview">new review</Link>
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
            <div className="review-box">
              <Link key={index} to={`/comments/${review.review_id}`}>
                <p>{review.category}</p>
                <h1>{review.title}</h1>
                <h2>{review.owner}</h2>
                <img src={review.review_img_url} alt="review"></img>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default ReviewBody;
