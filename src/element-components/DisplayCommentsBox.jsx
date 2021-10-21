import { useState, useEffect } from "react";
import { getComments, removeComment } from "../utils/api";
import { patchComment } from "../utils/api";

function DisplayCommentsBox({ review_id, currentUser, comments, setComments }) {
  const [newLikes, setNewLikes] = useState(0);

  useEffect(() => {
    getComments(review_id).then((results) => {
      setComments(results);
    });
  }, [review_id, setComments]);

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
    const comment_id = e.target.value;
    // const filteredComments = comments.filter(
    //   (comment) => comment.comment_id === comment_id
    // );
    // setNewLikes((currentLikes) => {
    //   currentLikes++;
    // });
    setNewLikes((currentLikes) => {
      setNewLikes(currentLikes + 1);
    });
    patchComment(comment_id);
  };

  console.log(newLikes);

  return (
    <div id="comments_box">
      {comments.map((comment, index) => {
        return (
          <section key={index}>
            <h1>{comment.author}</h1>
            <p>{comment.body}</p>
            <button onClick={likeComment} value={comment.comment_id}>
              ⭐️{comment.votes}
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
