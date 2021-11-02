import ReviewBody from "../element-components/ReviewBody";
import { useParams } from "react-router";

function ReviewsPage({ currentUser }) {
  // const [err, setErr] = useState(false);

  const { category } = useParams();

  return (
    <div>
      <ReviewBody
        category={category}
        currentUser={currentUser}
        // setErr={setErr}
      />
    </div>
  );
}
export default ReviewsPage;
