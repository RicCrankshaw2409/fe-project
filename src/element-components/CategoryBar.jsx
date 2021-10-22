import { useEffect } from "react";
import { getCategories } from "../utils/api";
import "../component-css/CategoryBar.css";
import Nav from "react-bootstrap/Nav";

function CategoryBar({ setCategories, categories }) {
  useEffect(() => {
    getCategories().then((results) => {
      setCategories(results);
    });
  }, [setCategories]);

  return (
    <Nav>
      {categories.map((category, index) => {
        return (
          <Nav.Link key={index} href={`/reviews/${category.slug}`}>
            {category.slug}
          </Nav.Link>
        );
      })}
    </Nav>
  );
}

export default CategoryBar;
