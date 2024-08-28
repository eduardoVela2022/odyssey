/* eslint-disable react/prop-types */

// Imports
import { useState } from "react";
import FormInputField from "../components/Form/FormInputField";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";
import { useMutation } from "@apollo/client";
import { ADD_ADVENTURE } from "../utils/mutation";
import { useNavigate } from "react-router-dom";

// Create and update adventure page
function CreateUpdateAventurePage({ update = false }) {
  // States
  const [destination, setDestination] = useState("");
  const [country, setCountry] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Navigation
  const navigate = useNavigate();

  // Header navigation bar routes
  const navBarRoutes = [{ name: "Go back", link: "/adventures" }];

  // Mutation to add an adventure
  const [addAdventure, { error }] = useMutation(ADD_ADVENTURE);

  // Functions
  async function handleSubmit(e) {
    // Prevents the page from reloading
    e.preventDefault();

    try {
      // Adds the adventure with the given data
      await addAdventure({
        variables: {
          destination,
          country,
          departureDate,
          returnDate,
        },
      });

      // Go to the user's adventures page
      navigate("/adventures");
      alert("Adventure was created successfully!");
    } catch (error) {
      // If an error occurs, log it to the console
      console.log(error);
    }
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
