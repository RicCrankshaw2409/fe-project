import { useState, useEffect } from "react";
import { getComments } from "../utils/api";

function DisplayCommentsBox({ review_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((results) => {
      setComments(results);
    });
  }, [review_id, comments]);

  return (
    <div id="comments_box">
      {comments.map((comment, index) => {
        return (
          <section key={index}>
            <h1>{comment.author}</h1>
            <p>{comment.body}</p>
            <button value={comment.comment_id}>{comment.votes}</button>
          </section>
        );
      })}
    </div>
  );
}

export default DisplayCommentsBox;
