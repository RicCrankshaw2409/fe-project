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
      <p className="fadeInDown" id="header-logo">
        <span id="review-logo-left">Bored?</span> Reviews
        <FontAwesomeIcon id="review-icon" icon={faChessKnight} />
      </p>
      <p id="signin-heading">Welcome </p>
      <div id="msg-container">
        <p id="signin-msg">
          Join the board game community. Review your favourite board games and
          interact with other board-game addicts.
        </p>
      </div>
      <Form id="signin-submit-form" onSubmit={checkLogIn}>
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
        <Button id="form-submit-btn" type="submit">
          Sign-In
        </Button>
      </Form>
      <p id="signin-prompt" className="text-muted">
        Guest ? username = tickle122
      </p>
      <div>{needToSignUp()}</div>
    </section>
  );
}

export default SignInBox;
