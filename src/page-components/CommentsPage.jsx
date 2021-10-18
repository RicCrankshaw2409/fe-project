import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getComments, getCurrentReview } from "../utils/api";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [currentReview, setCurrentReview] = useState({});

  const { review_id } = useParams();

  useEffect(() => {
    getComments(review_id).then((results) => {
      setComments(results);
    });
  }, [review_id]);

  useEffect(() => {
    getCurrentReview(review_id).then((results) => {
      setCurrentReview(results);
    });
  }, [review_id]);

  return (
    <section>
      <div id="current_review_body">
        <div id="current_review_header">
          <p>{currentReview.category}</p>
        </div>
        <h1>{currentReview.title}</h1>
        <h2>{currentReview.owner}</h2>
        <h2>{currentReview.created_at}</h2>
        <img src={currentReview.review_img_url} alt="review"></img>
        <button>{currentReview.votes}</button>
      </div>
      <div id="comments_box">
        {comments.map((comment) => {
          return (
            <>
              <h1>{comment.author}</h1>
              <p>{comment.body}</p>
              <button>{comment.votes}</button>
            </>
          );
        })}
      </div>
      <div>
        <form>
          <p>Please leave a comment below</p>
          <label htmlFor="comment_input_box"></label>
          <input id="comment_input_box" type="text-box"></input>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default CommentsPage;
