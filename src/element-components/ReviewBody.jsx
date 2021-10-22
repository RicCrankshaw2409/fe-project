import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews, removeReview } from "../utils/api";
import { LoadingIcon } from "../bootstrap-components/LoadingIcon";
import "../component-css/ReviewBody.css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function ReviewBody({ category, currentUser, setErr }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    setErr(false);
    setIsLoading(true);
    getReviews(sortBy, category)
      .then((results) => {
        setReviews(results);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(true);
      });
  }, [category, sortBy, setErr]);

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

  if (isLoading) return LoadingIcon();

  return (
    <div id="review-body">
      <section>
        <Form.Select
          id="sortby-form"
          defaultValue="selected"
          onChange={handleSortBy}
        >
          <option value="selected" disabled={true}>
            Sort-Reviews-By
          </option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </Form.Select>
      </section>
      <section id="review-cards">
        <div id="review-header">
          <p id="header-logo">
            <span id="review-logo-left">Bored?</span> Reviews
            <FontAwesomeIcon id="review-icon" icon={faChessKnight} />
          </p>
          <p id="review-description">
            Click on a review to read more, vote on the review or leave a
            comment
          </p>
          <p id="post-review-prompt">
            Or post a <Link to="/newreview">review</Link> of you own
          </p>
          {sortBy ? <p>Reviews sorted by {sortBy}</p> : null}
        </div>
        <div id="review-card-container">
          {reviews.map((review, index) => {
            return (
              <Link id="review-link" to={`/comments/${review.review_id}`}>
                <Card
                  style={{ width: "300px" }}
                  key={index}
                  className="review-box"
                  id="individual-card"
                >
                  <Card.Header id="card-header">{review.title}</Card.Header>
                  <Card.Img
                    variant="top"
                    src={review.review_img_url}
                    alt="review"
                  ></Card.Img>
                  <ListGroup>
                    <Card.Text id="review-body">
                      Review: {`${review.review_body.slice(0, 50)}......`}
                    </Card.Text>
                    <ListGroupItem>Author: {review.owner}</ListGroupItem>
                    <ListGroupItem>
                      {review.category}{" "}
                      <button
                        value={review.review_id}
                        onClick={deleteReview}
                        hidden={review.owner === currentUser ? false : true}
                      >
                        <FontAwesomeIcon id="review-icon" icon={faTrashAlt} />
                      </button>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Link>
            );
          })}
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}

export default ReviewBody;
