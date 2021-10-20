import { useState, useEffect } from "react";
import { getComments, removeComment } from "../utils/api";

function DisplayCommentsBox({ review_id, currentUser }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((results) => {
      setComments(results);
    });
  }, [review_id, comments]);

  const deleteComment = (e) => {
    e.preventDefault();
    const comment_id = e.target.value;
    removeComment(comment_id);
  };

  return (
    <div id="comments_box">
      {comments.map((comment, index) => {
        return (
          <section key={index}>
            <h1>{comment.author}</h1>
            <p>{comment.body}</p>
            <button value={comment.comment_id}>{comment.votes}</button>
            <button
              value={comment.comment_id}
              onClick={deleteComment}
              hidden={comment.author === currentUser ? false : true}
            >
              Delete Comment
            </button>
          </section>
        );
      })}
    </div>
  );
}

export default DisplayCommentsBox;
