import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviews(category)
      .then((results) => {
        setReviews(results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  const filteredReviews = (category, reviews) => {
    const filteredReviews = reviews.filter((review) => {
      return review.category === category;
    });

    const filteredReviewBox = filteredReviews.map((review, index) => {
      return (
        <div className="review-box">
          <form>
            <label htmlFor="comment_sort">Sort reviews</label>
            <select name="" id="">
              <option>Date</option>
              <option>Comments</option>
              <option>Votes</option>
            </select>
          </form>
          <Link key={index} to={`/comments/${review.review_id}`}>
            <p>{review.category}</p>
            <h1>{review.title}</h1>
            <h2>{review.owner}</h2>
            <img src={review.review_img_url} alt="review"></img>
          </Link>
        </div>
      );
    });

    return filteredReviewBox;
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      {!category
        ? reviews.map((review, index) => {
            return (
              <div className="review-box">
                <form>
                  <label htmlFor="comment_sort">Sort reviews</label>
                  <select name="" id="">
                    <option>Date</option>
                    <option>Comments</option>
                    <option>Votes</option>
                  </select>
                </form>
                <Link key={index} to={`/comments/${review.review_id}`}>
                  <p>{review.category}</p>
                  <h1>{review.title}</h1>
                  <h2>{review.owner}</h2>
                  <img src={review.review_img_url} alt="review"></img>
                </Link>
              </div>
            );
          })
        : filteredReviews(category, reviews)}
    </section>
  );
}
export default ReviewsPage;
