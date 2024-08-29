// Imports
import { Link, useParams } from "react-router-dom";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";
import CompletionBar from "../components/SingleAdventure/CompletionBar";
import OdysseyList from "../components/SingleAdventure/OdysseyList";
import { useQuery } from "@apollo/client";
import { QUERY_ADVENTURE } from "../utils/queries";
import { useEffect } from "react";

// Adventures page
function SingleAdventurePage() {
  // Header navigation bar routes
  const navBarRoutes = [
    { name: "Home", link: "/adventures" },
    { name: "Log out", link: "/" },
  ];

  // Obtains the id of the adventure that was passed in the URL as a parameter
  const { id: adventureParam } = useParams();

  // Gets the adventure that has the given id from the database
  const { loading, data, refetch } = useQuery(QUERY_ADVENTURE, {
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
          <div className="page-title-and-btn-container">
            <PageTitle title="Choose an odyssey!" />

            <Link
              className="primary-btn"
              to={`/create-odyssey/${adventureParam}`}
            >
              Add an odyssey
            </Link>
          </div>

          <CompletionBar completed={4} incompleted={6} total={10} />

          {!data ? (
            <p className="empty-list-message">
              You currently have no odysseys. Create one! 🏝️
            </p>
          ) : (
            <OdysseyList odysseys={data.adventure.odysseys} refetch={refetch} />
          )}
        </div>
      </main>
    </>
  );
}

// Export
export default SingleAdventurePage;
