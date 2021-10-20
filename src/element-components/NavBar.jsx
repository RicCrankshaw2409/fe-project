import { NavLink } from "react-router-dom";

const handleSignOut = () => {
  localStorage.removeItem("loggedInUser");
};

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
          <button onClick={handleSignOut}>Sign-out</button>
        </NavLink>
        <NavLink to="/newreview">
          <button>Post Review</button>
        </NavLink>
        <NavLink to="/profile">
          <button>Profile</button>
        </NavLink>
      </section>
    </nav>
  );
}

export default NavBar;
