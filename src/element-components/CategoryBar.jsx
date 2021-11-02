import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../component-css/CategoryBar.css";

function CategoryBar({ categories, currentUser }) {
  return (
    <NavBar id="secondary-navbar" collapseOnSelect expand="lg">
      <Container id="secondary-nav-container">
        <NavBar.Toggle
          id="navbar-toggler"
          aria-controls="responsive-navbar-nav"
        >
          <span>
            Select Review Category
            <FontAwesomeIcon id="icon" icon={faBars} />
          </span>
        </NavBar.Toggle>
        <NavBar.Collapse id="responsive-navbar-nav-cat">
          <Nav id="navbar-nav">
            <NavBar.Text id="categories-label">Review Categories :</NavBar.Text>
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
        </NavBar.Collapse>
        <small id="profile-username">Signed in as : {currentUser}</small>
      </Container>
    </NavBar>
  );
}

export default CategoryBar;
