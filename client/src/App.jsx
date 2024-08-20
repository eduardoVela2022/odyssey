// Imports
import { Outlet } from "react-router-dom";
import Footer from "./components/UI/Footer";
import "./App.css";

// App view
function App() {
  // View
  return (
    <>
      <Outlet />

      <Footer />
    </>
  );
}

// Export
export default App;
