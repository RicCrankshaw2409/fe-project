import SignInBox from "../element-components/SignInBox";

function SignInPage({ setCurrentUser }) {
  return (
    <section>
      <SignInBox setCurrentUser={setCurrentUser} />
    </section>
  );
}

export default SignInPage;
