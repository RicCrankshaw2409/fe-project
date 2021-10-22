import NewReviewForm from "../element-components/NewReviewForm";

function NewReviewPage({ currentUser, categories }) {
  return (
    <section id="NewReviewPage">
      <NewReviewForm currentUser={currentUser} categories={categories} />
    </section>
  );
}

export default NewReviewPage;
