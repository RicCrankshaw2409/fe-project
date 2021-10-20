import SignInBox from "../element-components/SignInBox";

function SignInPage({ setCurrentUser, users, setUsers }) {
  return (
    <section>
      <SignInBox
        setCurrentUser={setCurrentUser}
        users={users}
        setUsers={setUsers}
      />
    </section>
  );
}

export default SignInPage;
