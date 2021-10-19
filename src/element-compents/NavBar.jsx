import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>Bored? Reviews</h1>
      <section id="nav-buttons">
        <NavLink to="/reviews">
          <button>Home</button>
        </NavLink>
        <NavLink to="/">
          <button>Sign-In</button>
        </NavLink>
        <NavLink to="/">
          <button>Sign-out</button>
        </NavLink>
      </section>
    </nav>
  );
}

export default NavBar;
