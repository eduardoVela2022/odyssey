/* eslint-disable react/prop-types */

// Imports
import { Link } from "react-router-dom";

// Header component
function Header({ navBarRoutes }) {
  // View
  return (
    <header className="header-container">
      <h1 className="header-title">Odyssey</h1>

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
