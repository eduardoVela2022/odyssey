/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// Header component
function Header({ navBarRoutes }) {
  // View
  return (
    <header className="header-container">
      <Link to={"/"} className="header-title">
        Odyssey
      </Link>

      <nav className="navbar-container">
        {navBarRoutes.map((route) => (
          <Link className="navbar-item" key={route.link} to={route.link}>
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

// Export
export default Header;
