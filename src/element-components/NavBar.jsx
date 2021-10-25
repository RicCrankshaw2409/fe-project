import "../component-css/NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";

const handleSignOut = () => {
  localStorage.removeItem("loggedInUser");
};

function NavBar() {
  return (
    <Navbar
      id="primary-navbar"
      collapseOnSelect
      bg="dark"
      variant="dark"
      expand="sm"
    >
      <Container fluid>
        <Row>
          <Col>
            <Navbar.Brand id="brand" href="/reviews">
              <span id="left-brand">Bored?</span> Reviews
              <FontAwesomeIcon id="icon" icon={faChessKnight} />
            </Navbar.Brand>
          </Col>
          <Col className="second-col">
            <Navbar.Toggle id="hamburger-menu" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/reviews">Reviews</Nav.Link>
                <Nav.Link href="/newreview">Post Review</Nav.Link>
                <Nav.Link href="/" onClick={handleSignOut}>
                  Sign-out
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
