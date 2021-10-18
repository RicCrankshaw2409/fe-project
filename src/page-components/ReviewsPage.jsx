import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getReviews(category).then((results) => {
      console.log(results);
      setReviews(results);
    });
  }, [category]);

  const filteredReviews = (category, reviews) => {
    const filteredReviews = reviews.filter((review) => {
      return review.category === category;
    });

    const filteredReviewBox = filteredReviews.map((review, index) => {
      return (
        <Link key={index} to={`comments/${review.review_id}`}>
          <p>{review.category}</p>
          <h1>{review.title}</h1>
          <h2>{review.owner}</h2>
          <img src={review.review_img_url} alt="review"></img>
        </Link>
      );
    });

    return filteredReviewBox;
  };

  return (
    <section>
      {!category
        ? reviews.map((review, index) => {
            return (
              <Link key={index} to={`comments/${review.review_id}`}>
                <p>{review.category}</p>
                <h1>{review.title}</h1>
                <h2>{review.owner}</h2>
                <img src={review.review_img_url} alt="review"></img>
              </Link>
            );
          })
        : filteredReviews(category, reviews)}
    </section>
  );
}

export default ReviewsPage;
