import { useState, useEffect } from "react";
import { getComments, removeComment } from "../utils/api";
import { patchComment } from "../utils/api";
import { errorMsg } from "../utils/helper-functions";
import "../component-css/CommentDisplayBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function DisplayCommentsBox({
  review_id,
  currentUser,
  comments,
  setComments,
  isLoading,
}) {
  const [newLikes, setNewLikes] = useState(0);
  const [currentCommentId, setCurrentCommentId] = useState(0);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setErr(false);
    getComments(review_id)
      .then((results) => {
        setComments(results);
      })
      .catch((err) => {
        setErr(true);
      });
  }, [review_id, setComments]);

  const deleteComment = (e) => {
    e.preventDefault();
    const comment_id = e.currentTarget.value;
    console.log(comment_id);

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
    <div id="comments-box">
      <p id="comments-box-heading">Comments</p>
      {comments.map((comment, index) => {
        return (
          <section id="comment-container" key={index}>
            <p id="dc-heading">{comment.author}</p>
            <p id="dc-comment-body">{comment.body}</p>
            <button
              id="dc-star"
              onClick={likeComment}
              value={comment.comment_id}
            >
              ⭐️
            </button>
            <p id="like-value">
              {currentCommentId === comment.comment_id
                ? comment.votes + newLikes
                : comment.votes}
            </p>
            <button
              id="dc-delete"
              value={comment.comment_id}
              onClick={deleteComment}
              hidden={comment.author === currentUser ? false : true}
            >
              <FontAwesomeIcon id="review-icon" icon={faTrashAlt} />
            </button>
          </section>
        );
      })}
    </div>
  );
}

export default DisplayCommentsBox;
