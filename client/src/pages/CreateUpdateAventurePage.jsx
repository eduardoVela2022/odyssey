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
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

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
    console.log(departureDate);
    console.log(returnDate);
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
            label="Departure date:"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            type="date"
          />

          <FormInputField
            label="Return date:"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
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
