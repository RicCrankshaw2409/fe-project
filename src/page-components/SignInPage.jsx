import { useState, useEffect } from "react";
import { getUsers } from "../utils/api";
import { useHistory } from "react-router-dom";

function SignInPage({ setCurrentUser }) {
  const [userInput, setUserInput] = useState("");
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);

  const history = useHistory();

  useEffect(() => {
    getUsers().then((results) => {
      const usernames = results.map((user) => {
        return user.username;
      });
      setUsers(usernames);
    });
  }, []);

  const checkLogIn = () => {
    setErr(false);
    if (users.includes(userInput)) {
      setCurrentUser(userInput);
      history.push("/reviews");
    } else {
      setErr(true);
    }
  };

  const needToSignUp = () => {
    if (err) {
      return <p>User not found please sign up below</p>;
    }
  };

  return (
    <section>
      <h1>Bored? Reviews</h1>
      <h2>
        join the board game community, rate your favourite board games, leave
        reviews and like other users reviews
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
        ></input>
        <button>Sign-In</button>
      </form>
      <div>{needToSignUp()}</div>
    </section>
  );
}

export default SignInPage;
