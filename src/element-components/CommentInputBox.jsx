import { useState } from "react";
import { uploadComments } from "../utils/api";
import { getComments } from "../utils/api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import "../component-css/CommentInputBox.css";

function CommentInputBox({ review_id, currentUser, setComments }) {
  const [commentInput, setCommentInput] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    setErr(false);
    e.preventDefault();
    setCommentInput("");
    uploadComments(commentInput, currentUser, review_id)
      .then(() => {
        return getComments(review_id);
      })
      .then((result) => {
        setComments(result);
      })
      .catch(() => {
        setErr(true);
      });
  };

  return (
    <div id="comment-input-box">
      <Accordion>
        <Accordion.Item id="ci-accordion-item" eventKey="1">
          <Accordion.Header active="1">Leave a Comment</Accordion.Header>
          <Accordion.Body className="p-0 h-100">
            <Form className="h-100 secondary" onSubmit={handleSubmit}>
              <Form.Control
                className="p-10 h-100"
                id="comment-textbox"
                as="textarea"
                value={commentInput}
                placeholder="comment..."
                required
                onChange={(e) => {
                  setCommentInput(e.target.value);
                }}
              ></Form.Control>
              <Button id="ci-submit" type="submit">
                Submit
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div>
        {err ? <p>Error comment not uploaded, please try again..</p> : null}
      </div>
    </div>
  );
}

export default CommentInputBox;
