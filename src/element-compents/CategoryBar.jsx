import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

function CategoryBar() {
  const [categories, setCatagories] = useState([]);

  useEffect(() => {
    getCategories().then((results) => {
      setCatagories(results);
    });
  }, []);

  return (
    <section>
      {categories.map((category, index) => {
        return (
          <Link key={index} to={`reviews/${category.slug}`}>
            {category.slug}
          </Link>
        );
      })}
    </section>
  );
}

export default CategoryBar;
