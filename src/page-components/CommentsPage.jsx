import { useParams } from "react-router";
import { useState } from "react";
import DisplayCommentsBox from "../element-components/DisplayCommentsBox";
import CurrentReviewBody from "../element-components/CurrentReviewBody";
import CommentInputBox from "../element-components/CommentInputBox";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function CommentsPage({ currentUser }) {
  const [comments, setComments] = useState([]);

  const { review_id } = useParams();

  return (
    <>
      <Container id="comments-page-container">
        <Row>
          <Col md={7}>
            <CurrentReviewBody review_id={review_id} />
          </Col>
          <Col id="cp-col2" md={5}>
            <CommentInputBox
              review_id={review_id}
              currentUser={currentUser}
              comments={comments}
              setComments={setComments}
            />
            <DisplayCommentsBox
              review_id={review_id}
              currentUser={currentUser}
              comments={comments}
              setComments={setComments}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CommentsPage;
