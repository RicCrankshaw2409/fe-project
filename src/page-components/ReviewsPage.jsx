import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

function ReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((results) => {
      setReviews(results);
    });
  }, []);

  return (
    <section>
      {reviews.map((review, index) => {
        return (
          <Link key={index} to={`/reviews/${review.review_id}`}>
            <p>{review.category}</p>
            <h1>{review.title}</h1>
            <h2>{review.owner}</h2>
            <img src={review.review_img_url} alt="review"></img>
          </Link>
        );
      })}
    </section>
  );
}

export default ReviewsPage;
