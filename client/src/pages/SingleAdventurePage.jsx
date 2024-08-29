// Imports
import { Link, useParams } from "react-router-dom";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";
import OdysseyList from "../components/SingleAdventure/OdysseyList";
import { useQuery } from "@apollo/client";
import { QUERY_ADVENTURE } from "../utils/queries";
import { useEffect } from "react";

// Adventures page
function SingleAdventurePage() {
  // Obtains the id of the adventure that was passed in the URL as a parameter
  const { id: adventureParam, username: userParam } = useParams();

  // Header navigation bar routes
  const navBarRoutes = [
    { name: "Home", link: `/adventures/${userParam}` },
    { name: "Log out", link: "/" },
  ];

  // Gets the adventure that has the given id from the database
  const { data, refetch } = useQuery(QUERY_ADVENTURE, {
    variables: { _id: adventureParam },
  });

  console.log(data);

  // Refetches the data (Useful to display the up to date odyssey list)
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <Header navBarRoutes={navBarRoutes} />

      <main className="main-container">
        <div className="single-adventure-container">
          {data !== undefined ? (
            <>
              <div className="page-title-and-btn-container">
                <PageTitle title={data.adventure.destination} />

                <Link
                  className="primary-btn"
                  to={`/create-odyssey/${adventureParam}`}
                >
                  Add an odyssey
                </Link>
              </div>

              {data.adventure.odysseys.length > 0 ? (
                <OdysseyList
                  odysseys={data.adventure.odysseys}
                  refetch={refetch}
                />
              ) : (
                <p className="empty-list-message">
                  You currently have no odysseys. Create one! 🏝️
                </p>
              )}
            </>
          ) : (
            <p className="page-title">Loading...</p>
          )}
        </div>
      </main>
    </>
  );
}

// Export
export default SingleAdventurePage;
