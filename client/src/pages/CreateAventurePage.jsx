// Imports
import { useState } from "react";
import FormInputField from "../components/Form/FormInputField";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";
import { useMutation } from "@apollo/client";
import { ADD_ADVENTURE } from "../utils/mutation";
import { useNavigate, useParams } from "react-router-dom";

// Create and update adventure page
function CreateAventurePage() {
  // States
  const [destination, setDestination] = useState("");
  const [country, setCountry] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Obtains the username that was passed in the URL as a parameter
  const { username: userParam } = useParams();

  // Navigation
  const navigate = useNavigate();

  // Header navigation bar routes
  const navBarRoutes = [{ name: "Go back", link: `/adventures/${userParam}` }];

  // Mutation to add an adventure
  const [addAdventure] = useMutation(ADD_ADVENTURE);

  // Checks if fields are filled
  function fieldsAreFilled() {
    if (!destination || !country || !departureDate || !returnDate) {
      return true;
    } else {
      return false;
    }
  }

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
      navigate(`/adventures/${userParam}`);
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
          <PageTitle title={"New Adventure"} />

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
            text={"Create"}
            onClick={handleSubmit}
            type="submit"
            disabled={fieldsAreFilled()}
          />
        </form>
      </main>
    </>
  );
}

// Export
export default CreateAventurePage;
