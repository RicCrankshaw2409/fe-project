import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../component-css/CategoryBar.css";

function CategoryBar({ categories, currentUser }) {
  return (
    <Navbar id="secondary-navbar" collapseOnSelect expand="lg">
      <Container id="secondary-nav-container">
        <Navbar.Toggle
          id="navbar-toggler"
          aria-controls="responsive-navbar-nav"
        >
          <span>
            Select Review Category
            <FontAwesomeIcon id="icon" icon={faBars} />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav-cat">
          <Nav id="navbar-nav">
            <Navbar.Text id="categories-label">Review Categories :</Navbar.Text>
            <Nav.Link
              className="secondary-navlinks"
              key="1"
              href={`/reviews/strategy`}
            >
              Strategy
            </Nav.Link>
            <Nav.Link
              className="secondary-navlinks"
              key="2"
              href={`/reviews/hidden-roles`}
            >
              Hidden-Roles
            </Nav.Link>
            <Nav.Link
              className="secondary-navlinks"
              key="3"
              href={`/reviews/dexterity`}
            >
              Dexterity
            </Nav.Link>
            <Nav.Link
              className="secondary-navlinks"
              key="4"
              href={`/reviews/push-your-luck`}
            >
              Push Your Luck
            </Nav.Link>
            <Nav.Link
              className="secondary-navlinks"
              key="5"
              href={`/reviews/roll-and-write`}
            >
              Roll And Write
            </Nav.Link>
            <Nav.Link
              className="secondary-navlinks"
              key="6"
              href={`/reviews/deck-building`}
            >
              Deck Building
            </Nav.Link>
            <Nav.Link
              className="secondary-navlinks"
              key="7"
              href={`/reviews/engine-building`}
            >
              Engine Building
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <small id="profile-username">Signed in as : {currentUser}</small>
      </Container>
    </Navbar>
  );
}

export default CategoryBar;
