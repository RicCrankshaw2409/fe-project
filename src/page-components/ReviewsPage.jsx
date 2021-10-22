import ReviewBody from "../element-components/ReviewBody";
import { useParams } from "react-router";
import { useState } from "react";
import { errorMsg } from "../utils/helper-functions";

function ReviewsPage({ currentUser }) {
  const [err, setErr] = useState(false);

  const { category } = useParams();

  if (err) return errorMsg();

  return (
    <div>
      <ReviewBody
        category={category}
        currentUser={currentUser}
        setErr={setErr}
      />
    </div>
  );
}
export default ReviewsPage;
