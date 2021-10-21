import { useState } from "react";
import { postReview } from "../utils/api";

function NewReviewForm({ currentUser, categories, setCreatedReviewId }) {
  const [reviewInput, setReviewInput] = useState({
    title: "",
    image: "",
    manufacturer: "",
    body: "",
    category: null,
  });
  const [displayNewReview, setDisplayNewReview] = useState(false);

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
      .then((result) => {
        setCreatedReviewId(result.data.review.review_id);
        setDisplayNewReview(true);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  return (
    <section>
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
          value={reviewInput.title}
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
          value={reviewInput.image}
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
          value={reviewInput.manufacturer}
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
          required
          type="textbox"
          value={reviewInput.body}
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
      {displayNewReview ? (
        <div>
          <p>{reviewInput.title}</p>
          <img src={reviewInput.image} alt={"board-game"}></img>
          <p>{reviewInput.body}</p>
          <p>{reviewInput.category}</p>
          <p>{reviewInput.manufacturer}</p>
        </div>
      ) : null}
    </section>
  );
}

export default NewReviewForm;
