import { useParams } from "react-router";
import { useState } from "react";
import DisplayCommentsBox from "../element-components/DisplayCommentsBox";
import CurrentReviewBody from "../element-components/CurrentReviewBody";
import CommentInputBox from "../element-components/CommentInputBox";

function CommentsPage({ currentUser }) {
  const [comments, setComments] = useState([]);

  const { review_id } = useParams();
  return (
    <section>
      <CurrentReviewBody review_id={review_id} />
      <CommentInputBox
        review_id={review_id}
        currentUser={currentUser}
        comments={comments}
        setComments={setComments}
      />
      <DisplayCommentsBox
        review_id={review_id}
        currentUser={currentUser}
        comments={comments}
        setComments={setComments}
      />
    </section>
  );
}

export default CommentsPage;
