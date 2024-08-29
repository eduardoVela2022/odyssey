// Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import "./reset.css";
import CreateOdysseyPage from "./pages/CreateOdysseyPage.jsx";
import CreateAventurePage from "./pages/CreateAventurePage.jsx";
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
      { path: "sign-up", element: <SignUpPage /> },
      // Adventures page
      { path: "adventures/:username", element: <AdventuresPage /> },
      // Single adventure page
      { path: "adventure/:id/:username", element: <SingleAdventurePage /> },
      // Create adventure
      {
        path: "create-adventure/:username",
        element: <CreateAventurePage />,
      },
      // Create odyssey page
      { path: "create-odyssey/:id", element: <CreateOdysseyPage /> },
    ],
  },
]);

// Attach the router provider to the root HTML element
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
