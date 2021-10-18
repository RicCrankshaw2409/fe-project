import { useState, useEffect } from "react";
import { getUsers } from "../utils/api";

function SignInPage({ setCurrentUser }) {
  const [userInput, setUserInput] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((results) => {
      const usernames = results.map((user) => {
        return user.username;
      });
      setUsers(usernames);
    });
  }, []);

  const checkLogIn = (e) => {
    if (users.includes(userInput)) {
      setCurrentUser(userInput);
    } else {
    }
  };

  return (
    <section>
      <h1>Bored? Reviews</h1>
      <h2>
        join the board game community, rate your favourite board games, leave
        reviews and like other users reviews
      </h2>
      <form onSubmit={checkLogIn()}>
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
    </section>
  );
}

export default SignInPage;
