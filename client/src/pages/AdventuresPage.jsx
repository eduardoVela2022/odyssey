// Imports
import { Link, useParams } from "react-router-dom";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";
import AdventureGrid from "../components/Adventure/AdventureGrid";
import { useQuery } from "@apollo/client";
import { QUERY_USER_ADVENTURES } from "../utils/queries";
import { useEffect } from "react";

// Adventures page
function AdventuresPage() {
  // Obtains the username that was passed in the URL as a parameter
  const { username: userParam } = useParams();

  // Header navigation bar routes
  const navBarRoutes = [
    { name: "Home", link: `/adventures/${userParam}` },
    { name: "Log out", link: "/" },
  ];

  // Gets the adventures of the user from the database
  const { loading, data, refetch } = useQuery(QUERY_USER_ADVENTURES, {
    variables: { username: userParam },
  });

  // Refetches the data (Useful to display the up to date adventure list)
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <Header navBarRoutes={navBarRoutes} />

      <main className="main-container">
        <div className="adventures-container">
          <div className="page-title-and-btn-container">
            <PageTitle title="Choose an adventure!" />

            <Link className="primary-btn" to={`/create-adventure/${userParam}`}>
              Add an adventure
            </Link>
          </div>

          {!data ? (
            <p className="empty-list-message">
              You currently have no adventures. Create one! 🏝️
            </p>
          ) : (
            <AdventureGrid
              adventures={data.user.adventures}
              refetch={refetch}
            />
          )}
        </div>
      </main>
    </>
  );
}

// Export
export default AdventuresPage;
