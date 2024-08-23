/* eslint-disable react/prop-types */

// Imports
import { useState } from "react";
import FormInputField from "../components/Form/FormInputField";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";

// Create and update adventure page
function CreateUpdateAventurePage({ update = false }) {
  // States
  const [destination, setDestination] = useState("");
  const [country, setCountry] = useState("");
  const [dateOfAdventure, setDateOfAdventure] = useState("");

  // Header navigation bar routes
  const navBarRoutes = [
    { name: "Login", link: "/" },
    { name: "Sign up", link: "/sign-up" },
  ];

  // Functions
  function handleSubmit(e) {
    e.preventDefault();

    console.log(destination);
    console.log(country);
    console.log(dateOfAdventure);
  }

  // View
  return (
    <>
      <Header navBarRoutes={navBarRoutes} />

      <main className="main-container">
        <form className="form-container">
          <PageTitle title={update ? "Update Adventure" : "New Adventure"} />

          <FormInputField
            label="Destination:"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
          />

          <FormInputField
            label="Country:"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
          />

          <FormInputField
            label="Date of Adventure:"
            value={dateOfAdventure}
            onChange={(e) => setDateOfAdventure(e.target.value)}
            type="date"
          />

          <Button
            text={update ? "Update" : "Create"}
            onClick={handleSubmit}
            type="submit"
          />
        </form>
      </main>
    </>
  );
}

// Export
export default CreateUpdateAventurePage;
