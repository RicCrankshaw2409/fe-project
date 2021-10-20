import { useState } from "react";
import { useHistory } from "react-router-dom";

function SignInBox({ setCurrentUser, users }) {
  const [userInput, setUserInput] = useState(null);
  const [err, setErr] = useState(false);

  const history = useHistory();

  const checkLogIn = (e) => {
    e.preventDefault();
    setErr(false);
    const usernames = users.map((user) => {
      return user.username;
    });
    if (usernames.includes(userInput)) {
      setCurrentUser(userInput);
      localStorage.setItem("loggedInUser", userInput);
      history.push("/reviews");
    } else {
      setErr(true);
    }
    setUserInput("");
  };

  const needToSignUp = () => {
    if (err) {
      return <p>User not found with entered username, please try again</p>;
    }
  };

  return (
    <section>
      <h1>Bored? Reviews</h1>
      <h2>
        join the board game community, rate your favourite board games, leave
        reviews and like other allUsers reviews
      </h2>
      <form onSubmit={checkLogIn}>
        <label htmlFor="username">User: </label>
        <input
          id="username"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          required
          type="text"
          placeholder="Guest? user = tickle122"
        ></input>
        <button>Sign-In</button>
      </form>
      <div>{needToSignUp()}</div>
    </section>
  );
}

export default SignInBox;
