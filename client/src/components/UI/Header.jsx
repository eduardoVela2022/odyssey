/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// Header component
function Header({ navBarRoutes }) {
  // View
  return (
    <header>
      <h1>Odyssey</h1>

      {navBarRoutes.map((route) => (
        <Link key={route.link} to={route.link}>
          {route.name}
        </Link>
      ))}
    </header>
  );
}

// Export
export default Header;
