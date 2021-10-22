import { useState } from "react";
import { uploadComments } from "../utils/api";
import { getComments } from "../utils/api";

function CommentInputBox({ review_id, currentUser, comments, setComments }) {
  const [commentInput, setCommentInput] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    setErr(false);
    e.preventDefault();
    setCommentInput("");
    uploadComments(commentInput, currentUser, review_id)
      .then(() => {
        return getComments(review_id);
      })
      .then((result) => {
        setComments(result);
      })
      .catch(() => {
        setErr(true);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Please leave a comment below</p>
        <label htmlFor="comment_input_box"></label>
        <input
          value={commentInput}
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
      <div>
        {err ? <p>Error comment not uploaded, please try again..</p> : null}
      </div>
    </div>
  );
}

export default CommentInputBox;
