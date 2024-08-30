// Imports
import { useState } from "react";
import FormInputField from "../components/Form/FormInputField";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_ODYSSEY } from "../utils/mutation";

// Create and update odyssey page
function CreateOdysseyPage() {
  // States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Obtains the id of the adventure that was passed in the URL as a parameter
  const { id: adventureParam, username: userParam } = useParams();

  // Navigation
  const navigate = useNavigate();

  // Header navigation bar routes
  const navBarRoutes = [
    { name: "Go back", link: `/adventure/${adventureParam}/${userParam}` },
  ];

  // Mutation to add an adventure
  const [addOdyssey] = useMutation(ADD_ODYSSEY);

  // Checks if fields are filled
  function fieldsAreFilled() {
    if (!title || !description) {
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
      // Adds the odyssey with the given data
      await addOdyssey({
        variables: {
          adventureId: adventureParam,
          title,
          description,
        },
      });

      // Go to the single adventure page
      navigate(`/adventure/${adventureParam}/${userParam}`);
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
          <PageTitle title={"New Odyssey"} />

          <FormInputField
            label="Title:"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />

          <FormInputField
            label="Description:"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="textField"
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
export default CreateOdysseyPage;
