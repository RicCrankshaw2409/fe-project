import { useState } from "react";
import { postReview } from "../utils/api";

function NewReviewPage({ currentUser, categories }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postReview(title, manufacturer, image, body, category, currentUser);
  };

  return (
    <section id="NewReviewPage">
      <form onSubmit={handleSubmit}>
        <h1>New Review</h1>
        <label>Review Title</label>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
          type="text"
        ></input>
        <label>Image (URL)</label>
        <input
          onChange={(e) => {
            setImage(e.target.value);
          }}
          required
          type="text"
        ></input>
        <label>Manufacturer</label>
        <input
          onChange={(e) => {
            setManufacturer(e.target.value);
          }}
          required
          type="text"
        ></input>
        <label>Review</label>
        <input
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
          type="textbox"
        ></input>
        <select
          defaultValue="selected"
          onChange={(e) => setCategory(e.target.value)}
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
    </section>
  );
}

export default NewReviewPage;
