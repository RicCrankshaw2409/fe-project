import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getComments, getCurrentReview, uploadComments } from "../utils/api";

function CommentsPage({ currentUser }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentReview, setCurrentReview] = useState({});
  const [commentInput, setCommentInput] = useState("");

  const { review_id } = useParams();

  useEffect(() => {
    getComments(review_id).then((results) => {
      setComments(results);
    });
  }, [comments]);

  useEffect(() => {
    setIsLoading(true);
    getCurrentReview(review_id).then((results) => {
      setCurrentReview(results);
      setIsLoading(false);
    });
  }, [review_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadComments(commentInput, currentUser, review_id);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <div id="current_review_body">
        <p>{currentReview.category}</p>
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
        <form onSubmit={handleSubmit}>
          <p>Please leave a comment below</p>
          <label htmlFor="comment_input_box"></label>
          <input
            placeholder="comment..."
            required
            onChange={(e) => {
              setCommentInput(e.target.value);
            }}
            id="comment_input_box"
            type="text-box"
          ></input>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default CommentsPage;
