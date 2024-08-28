// Imports
import { Link, useParams } from "react-router-dom";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";
import AdventureGrid from "../components/Adventure/AdventureGrid";
import { useQuery } from "@apollo/client";
import { QUERY_USER_ADVENTURES } from "../utils/queries";

// Adventures page
function AdventuresPage() {
  // Header navigation bar routes
  const navBarRoutes = [
    { name: "Home", link: "/adventures" },
    { name: "Log out", link: "/" },
  ];

  // Obtains the username that was passed in the URL as a parameter
  const { username: userParam } = useParams();

  console.log(userParam);

  const { loading, data } = useQuery(QUERY_USER_ADVENTURES, {
    variables: { username: userParam },
  });

  console.log(data);

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

          {!data ? (
            <p className="empty-list-message">
              You currently have no adventures. Create one! 🏝️
            </p>
          ) : (
            <AdventureGrid adventures={data.user.adventures} />
          )}
        </div>
      </main>
    </>
  );
}

// Export
export default AdventuresPage;
