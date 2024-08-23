// Imports
import { Link } from "react-router-dom";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";
import CompletionBar from "../components/SingleAdventure/CompletionBar";
import OdysseyList from "../components/SingleAdventure/OdysseyList";

// Adventures page
function SingleAdventurePage() {
  // Header navigation bar routes
  const navBarRoutes = [
    { name: "Login", link: "/" },
    { name: "Sign up", link: "/sign-up" },
  ];

  // Test odyssey list
  const testOdysseys = [
    {
      id: 1,
      title: "Title 1",
      description: "Something",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Something",
    },
    {
      id: 3,
      title: "Title 3",
      description: "Something",
    },
    {
      id: 4,
      title: "Title 4",
      description: "Something",
    },
    {
      id: 5,
      title: "Title 2",
      description: "Something",
    },
    {
      id: 6,
      title: "Title 3",
      description: "Something",
    },
    {
      id: 7,
      title: "Title 4",
      description: "Something",
    },
  ];

  return (
    <>
      <Header navBarRoutes={navBarRoutes} />

      <main className="main-container">
        <div className="single-adventure-container">
          <div className="page-title-and-btn-container">
            <PageTitle title="Choose an odyssey!" />

            <Link className="primary-btn" to="/create-odyssey">
              Add an odyssey
            </Link>
          </div>

          <CompletionBar completed={4} incompleted={6} total={10} />

          <OdysseyList odysseys={testOdysseys} />
        </div>
      </main>
    </>
  );
}

// Export
export default SingleAdventurePage;
