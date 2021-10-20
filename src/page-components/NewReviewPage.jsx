import { useState } from "react";
import NewReviewForm from "../element-components/NewReviewForm";
import CurrentReviewBody from "../element-components/CurrentReviewBody";

function NewReviewPage({ currentUser, categories }) {
  const [createdReviewId, setCreatedReviewId] = useState(null);

  return (
    <section id="NewReviewPage">
      <NewReviewForm
        currentUser={currentUser}
        categories={categories}
        setCreatedReviewId={setCreatedReviewId}
      />
      <CurrentReviewBody createdReviewId={createdReviewId} />
    </section>
  );
}

export default NewReviewPage;
