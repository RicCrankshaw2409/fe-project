import { useEffect } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

function CategoryBar({ setCategories, categories }) {
  useEffect(() => {
    getCategories().then((results) => {
      setCategories(results);
    });
  }, [setCategories]);

  return (
    <section>
      {categories.map((category, index) => {
        return (
          <Link key={index} to={`/reviews/${category.slug}`}>
            {category.slug}
          </Link>
        );
      })}
    </section>
  );
}

export default CategoryBar;
