import { useState } from "react";
import { postReview } from "../utils/api";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../component-css/NewReviewForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";

function NewReviewForm({ currentUser, categories }) {
  const [reviewInput, setReviewInput] = useState({
    title: "",
    image: "",
    manufacturer: "",
    body: "",
    category: null,
  });
  const [submitNewReview, setSubmitNewReview] = useState(false);
  const [err, setErr] = useState(false);

  console.log(submitNewReview);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviewInput({
      title: "",
      image: "",
      manufacturer: "",
      body: "",
      category: null,
    });
    postReview(reviewInput, currentUser)
      .then((result) => {})
      .catch((err) => {
        setErr(true);
      });
    setSubmitNewReview(true);
  };

  return (
    <section class="NewFormReview">
      <h1>Enter you review below !</h1>
      <Form disabled={submitNewReview ? true : false} onSubmit={handleSubmit}>
        <Form.Group>
          <div id="nr-form-container">
            <p id="nr-brand">
              <span id="review-logo-left">Bored?</span> Reviews
              <FontAwesomeIcon id="review-icon" icon={faChessKnight} />
            </p>
            <Form.Label>Review Title</Form.Label>
            <Form.Control
              disabled={submitNewReview ? true : false}
              onChange={(e) => {
                setReviewInput((currentInput) => {
                  const tempInput = { ...currentInput };
                  tempInput.title = e.target.value;
                  return tempInput;
                });
              }}
              required
              type="text"
              value={reviewInput.title}
            ></Form.Control>
            <Form.Label>Image (URL)</Form.Label>
            <Form.Control
              disabled={submitNewReview ? true : false}
              onChange={(e) => {
                setReviewInput((currentInput) => {
                  const tempInput = { ...currentInput };
                  tempInput.image = e.target.value;
                  return tempInput;
                });
              }}
              required
              type="text"
              value={reviewInput.image}
            ></Form.Control>
            <Form.Label>Board Game</Form.Label>
            <Form.Control
              disabled={submitNewReview ? true : false}
              onChange={(e) => {
                setReviewInput((currentInput) => {
                  const tempInput = { ...currentInput };
                  tempInput.manufacturer = e.target.value;
                  return tempInput;
                });
              }}
              required
              type="text"
              value={reviewInput.manufacturer}
            ></Form.Control>
            <Form.Label>Review</Form.Label>
            <Form.Control
              disabled={submitNewReview ? true : false}
              onChange={(e) => {
                setReviewInput((currentInput) => {
                  const tempInput = { ...currentInput };
                  tempInput.body = e.target.value;
                  return tempInput;
                });
              }}
              required
              as="textarea"
              rows={3}
              value={reviewInput.body}
            ></Form.Control>
            <Form.Select
              disabled={submitNewReview ? true : false}
              defaultValue="selected"
              onChange={(e) => {
                setReviewInput((currentInput) => {
                  const tempInput = { ...currentInput };
                  tempInput.category = e.target.value;
                  return tempInput;
                });
              }}
              required
            >
              <option value="selected" disabled={true}>
                Select Option
              </option>
              {categories.map((category, index) => {
                return (
                  <option required key={index}>
                    {category.slug}
                  </option>
                );
              })}
            </Form.Select>
            <Button type="submit" disabled={submitNewReview ? true : false}>
              Submit
            </Button>
          </div>
        </Form.Group>
      </Form>
      {submitNewReview & !err ? (
        <div>
          <img
            src="https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1Y2Nlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="successful upload"
          ></img>
          <p>{reviewInput.title}</p>
          <p>
            Review Submitted - Check it out at{" "}
            <Link to={"/reviews"}>Reviews</Link> or Submit Another{" "}
            <Link
              onClick={() => {
                window.location.reload();
              }}
            >
              Review
            </Link>
          </p>
        </div>
      ) : null}
    </section>
  );
}

export default NewReviewForm;
