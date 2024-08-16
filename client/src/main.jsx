// Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

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
    ],
  },
]);

// Attach the router provider to the root HTML element
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
