// Imports
import { Link } from "react-router-dom";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";
import AdventureGrid from "../components/Adventure/AdventureGrid";

// Adventures page
function AdventuresPage() {
  // Header navigation bar routes
  const navBarRoutes = [
    { name: "Login", link: "/" },
    { name: "Sign up", link: "/sign-up" },
  ];

  // Test adventures list
  const testAdventures = [
    {
      id: 1,
      destination: "Monterrey",
      country: "Mexico",
      dateOfAdventure: new Date(),
    },
    {
      id: 2,
      destination: "Cancun",
      country: "Mexico",
      dateOfAdventure: new Date(),
    },
    {
      id: 3,
      destination: "Merida",
      country: "Mexico",
      dateOfAdventure: new Date(),
    },
    {
      id: 4,
      destination: "Tijuana",
      country: "Mexico",
      dateOfAdventure: new Date(),
    },
    {
      id: 5,
      destination: "Chihuahua",
      country: "Mexico",
      dateOfAdventure: new Date(),
    },
    {
      id: 6,
      destination: "Guadalajara",
      country: "Mexico",
      dateOfAdventure: new Date(),
    },
  ];

  return (
    <>
      <Header navBarRoutes={navBarRoutes} />

      <main className="main-container">
        <div className="adventures-container">
          <div className="page-title-and-btn-container">
            <PageTitle title="Choose an adventure!" />

            <Link className="primary-btn" to="/create-adventure">
              Add an adventure
            </Link>
          </div>

          <AdventureGrid adventures={testAdventures} />
        </div>
      </main>
    </>
  );
}

// Export
export default AdventuresPage;
