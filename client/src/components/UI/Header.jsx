/* eslint-disable react/prop-types */

// Imports
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

// Header component
function Header({ navBarRoutes }) {
  // View
  return (
    <header className="header-container">
      <h1 className="header-title">Odyssey</h1>

      <nav className="navbar-container">
        {navBarRoutes.map((route) =>
          route.name !== "Log out" ? (
            <Link className="navbar-item" key={route.link} to={route.link}>
              {route.name}
            </Link>
          ) : (
            <button
              className="navbar-item"
              key={route.link}
              onClick={Auth.logout}
            >
              {route.name}
            </button>
          )
        )}
      </nav>
    </header>
  );
}

// Export
export default Header;
