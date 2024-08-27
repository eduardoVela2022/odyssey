/* eslint-disable react/prop-types */

// Imports
import { useState } from "react";
import FormInputField from "../components/Form/FormInputField";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";

// Create and update odyssey page
function CreateUpdateOdysseyPage({ update = false }) {
  // States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Header navigation bar routes
  const navBarRoutes = [{ name: "Go back", link: "/adventure" }];

  // Functions
  function handleSubmit(e) {
    e.preventDefault();

    console.log(title);
    console.log(description);
  }

  // View
  return (
    <>
      <Header navBarRoutes={navBarRoutes} />

      <main className="main-container">
        <form className="form-container">
          <PageTitle title={update ? "Update Odyssey" : "New Odyssey"} />

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
export default CreateUpdateOdysseyPage;
