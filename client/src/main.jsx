// Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import "./reset.css";
import CreateUpdateOdysseyPage from "./pages/CreateOdysseyPage.jsx";

// we are going to construct the ENDPOINT to where we send our DATA
// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

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
