// Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import "./reset.css";
import CreateUpdateOdysseyPage from "./pages/CreateUpdateOdysseyPage.jsx";
import CreateUpdateAventurePage from "./pages/CreateUpdateAventurePage.jsx";
import AdventuresPage from "./pages/AdventuresPage.jsx";
import SingleAdventurePage from "./pages/SingleAdventurePage.jsx";

// Create the router and its paths
const router = createBrowserRouter([
  {
    // Default path
    path: "/",
    // App view
    element: <App />,
    // Error page
    errorElement: <ErrorPage />,
    // Paths
    children: [
      // Log in page
      { index: true, element: <LoginPage /> },
      // Sign up page
      { path: "/sign-up", element: <SignUpPage /> },
      // Adventures page
      { path: "adventures/:username", element: <AdventuresPage /> },
      // Single adventure page
      { path: "adventure", element: <SingleAdventurePage /> },
      // Create adventure
      {
        path: "create-adventure",
        element: <CreateUpdateAventurePage />,
      },
      // Update adventure
      {
        path: "update-adventure",
        element: <CreateUpdateAventurePage update={true} />,
      },
      // Create odyssey page
      { path: "/create-odyssey", element: <CreateUpdateOdysseyPage /> },
      // Update odyssey page
      {
        path: "/update-odyssey",
        element: <CreateUpdateOdysseyPage update={true} />,
      },
    ],
  },
]);

// Attach the router provider to the root HTML element
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
