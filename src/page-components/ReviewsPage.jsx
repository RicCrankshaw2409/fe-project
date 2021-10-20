import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);
  const { category } = useParams();

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
    console.log(e.target.value);
    setSortBy(e.target.value);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <Link to={`/newreview`}>submit review</Link>
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
      {reviews.map((review, index) => {
        return (
          <div key={index} className="review-box">
            <Link to={`/comments/${review.review_id}`}>
              <p>{review.category}</p>
              <h1>{review.title}</h1>
              <h2>{review.owner}</h2>
              <img src={review.review_img_url} alt="review"></img>
            </Link>
          </div>
        );
      })}
    </section>
  );
}
export default ReviewsPage;
