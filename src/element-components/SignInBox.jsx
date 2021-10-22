import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../component-css/SignInBox.css";

function SignInBox({ setCurrentUser, users }) {
  const [userInput, setUserInput] = useState("");
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
    <section id="signin-box">
      <h1 id="signin-heading">Welcome !</h1>
      <p id="header-logo">
        <span id="review-logo-left">Bored?</span> Reviews
        <FontAwesomeIcon id="review-icon" icon={faChessKnight} />
      </p>
      <h2>
        join the board game community, rate your favourite board games, leave
        reviews and like other users reviews
      </h2>
      <Form onSubmit={checkLogIn}>
        <Form.Control
          id="username"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          required
          type="text"
          placeholder="username"
          value={userInput}
        ></Form.Control>
        <Form.Text className="text-muted">
          Guest ? username = Tickle122
        </Form.Text>
        <Button type="submit">Sign-In</Button>
      </Form>
      <div>{needToSignUp()}</div>
    </section>
  );
}

export default SignInBox;
