import { useState } from "react";
import { postReview } from "../utils/api";
import { Link } from "react-router-dom";

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
    <section>
      <form disabled={submitNewReview ? true : false} onSubmit={handleSubmit}>
        <h1>New Review</h1>
        <label>Review Title</label>
        <input
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
        ></input>
        <label>Image (URL)</label>
        <input
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
        ></input>
        <label>Manufacturer</label>
        <input
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
        ></input>
        <label>Review</label>
        <input
          disabled={submitNewReview ? true : false}
          onChange={(e) => {
            setReviewInput((currentInput) => {
              const tempInput = { ...currentInput };
              tempInput.body = e.target.value;
              return tempInput;
            });
          }}
          required
          type="textbox"
          value={reviewInput.body}
        ></input>
        <select
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
        </select>
        <button disabled={submitNewReview ? true : false}>Submit</button>
      </form>
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
