import { Link } from "react-router-dom";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";

// Adventures page
function AdventuresPage() {
  // Header navigation bar routes
  const navBarRoutes = [
    { name: "Login", link: "/" },
    { name: "Sign up", link: "/sign-up" },
  ];

  return (
    <>
      <Header navBarRoutes={navBarRoutes} />

      <main className="main-container">
        <div>
          <PageTitle title="Choose an adventure!" />

          <Link className="primary-btn" to="/create-adventure">
            Add an adventure
          </Link>
        </div>
      </main>
    </>
  );
}

// Export
export default AdventuresPage;
