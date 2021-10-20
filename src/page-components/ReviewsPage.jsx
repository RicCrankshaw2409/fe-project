import ReviewBody from "../element-components/ReviewBody";
import { useParams } from "react-router";

function ReviewsPage() {
  const { category } = useParams();

  return (
    <div>
      <ReviewBody category={category} />
    </div>
  );
}
export default ReviewsPage;
