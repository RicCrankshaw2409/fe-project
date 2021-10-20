import { useState } from "react";
import { postReview } from "../utils/api";

function NewReviewForm({ currentUser, categories, setCreatedReviewId }) {
  const [reviewInput, setReviewInput] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviewInput({});
    postReview(reviewInput, currentUser)
      .then((result) => {
        console.log(result.data.review.review_id);
        setCreatedReviewId(result.data.review.review_id);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Review</h1>
      <label>Review Title</label>
      <input
        onChange={(e) => {
          setReviewInput((currentInput) => {
            const tempInput = { ...currentInput };
            tempInput.title = e.target.value;
            return tempInput;
          });
        }}
        required
        type="text"
      ></input>
      <label>Image (URL)</label>
      <input
        onChange={(e) => {
          setReviewInput((currentInput) => {
            const tempInput = { ...currentInput };
            tempInput.image = e.target.value;
            return tempInput;
          });
        }}
        required
        type="text"
      ></input>
      <label>Manufacturer</label>
      <input
        onChange={(e) => {
          setReviewInput((currentInput) => {
            const tempInput = { ...currentInput };
            tempInput.manufacturer = e.target.value;
            return tempInput;
          });
        }}
        required
        type="text"
      ></input>
      <label>Review</label>
      <input
        onChange={(e) => {
          setReviewInput((currentInput) => {
            const tempInput = { ...currentInput };
            tempInput.body = e.target.value;
            return tempInput;
          });
        }}
        s
        required
        type="textbox"
      ></input>
      <select
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
      <button>Submit</button>
    </form>
  );
}

export default NewReviewForm;
