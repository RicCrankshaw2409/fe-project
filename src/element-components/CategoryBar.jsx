import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../component-css/CategoryBar.css";

function CategoryBar({ categories }) {
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
            {categories.map((category, index) => {
              return (
                <Nav.Link key={index} href={`/reviews/${category.slug}`}>
                  {category.slug}
                </Nav.Link>
              );
            })}
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
}

export default CategoryBar;
