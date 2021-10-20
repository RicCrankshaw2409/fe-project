import ReviewBody from "../element-components/ReviewBody";
import { useParams } from "react-router";

function ReviewsPage({ currentUser }) {
  const { category } = useParams();

  return (
    <div>
      <ReviewBody category={category} currentUser={currentUser} />
    </div>
  );
}
export default ReviewsPage;
