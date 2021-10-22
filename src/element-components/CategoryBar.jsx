import { useEffect } from "react";
import { getCategories } from "../utils/api";
import "../component-css/CategoryBar.css";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/NavBar";

function CategoryBar({ setCategories, categories }) {
  useEffect(() => {
    getCategories().then((results) => {
      setCategories(results);
    });
  }, [setCategories]);

  return (
    <NavBar id="secondary-nav" collapseOnSelect expand="sm">
      <NavBar.Toggle aria-controls="responsive-navbar-nav" />
      <Nav.Link>Categories :</Nav.Link>
      {categories.map((category, index) => {
        return (
          <Nav.Link key={index} href={`/reviews/${category.slug}`}>
            {category.slug}
          </Nav.Link>
        );
      })}
    </NavBar>
  );
}

export default CategoryBar;
