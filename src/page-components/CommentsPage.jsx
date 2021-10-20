import { useParams } from "react-router";
import DisplayCommentsBox from "../element-components/DisplayCommentsBox";
import CurrentReviewBody from "../element-components/CurrentReviewBody";
import CommentInputBox from "../element-components/CommentInputBox";

function CommentsPage({ currentUser }) {
  console.log(currentUser);
  const { review_id } = useParams();
  return (
    <section>
      <CurrentReviewBody review_id={review_id} />
      <CommentInputBox review_id={review_id} currentUser={currentUser} />
      <DisplayCommentsBox review_id={review_id} />
    </section>
  );
}

export default CommentsPage;
