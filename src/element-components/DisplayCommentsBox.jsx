import { useState, useEffect } from "react";
import { getComments, removeComment } from "../utils/api";
import { patchComment } from "../utils/api";
import { errorMsg } from "../utils/helper-functions";

function DisplayCommentsBox({ review_id, currentUser, comments, setComments }) {
  const [newLikes, setNewLikes] = useState(0);
  const [currentCommentId, setCurrentCommentId] = useState(1);
  const [err, setErr] = useState(false);

  console.log(currentCommentId);

  useEffect(() => {
    setErr(false);
    getComments(review_id)
      .then((results) => {
        setComments(results);
      })
      .catch((err) => {
        setErr(true);
      });
  }, [review_id, setComments, newLikes]);

  const deleteComment = (e) => {
    e.preventDefault();
    const comment_id = e.target.value;
    removeComment(comment_id)
      .then(() => {
        return getComments(review_id);
      })
      .then((results) => {
        setComments(results);
      });
  };

  const likeComment = (e) => {
    setCurrentCommentId(e.target.value);
    setNewLikes((currentLikes) => {
      setNewLikes(currentLikes + 1);
    });
    patchComment(currentCommentId);
  };

  if (err) return errorMsg();

  return (
    <div id="comments_box">
      {comments.map((comment, index) => {
        return (
          <section key={index}>
            <h1>{comment.author}</h1>
            <p>{comment.body}</p>
            <button onClick={likeComment} value={comment.comment_id}>
              ⭐️
              {currentCommentId === comment.comment_id
                ? comment.votes + newLikes
                : comment.votes}
            </button>
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
