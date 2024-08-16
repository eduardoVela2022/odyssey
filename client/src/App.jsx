// Imports
import { Outlet } from "react-router-dom";
import Footer from "./components/UI/Footer";

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
