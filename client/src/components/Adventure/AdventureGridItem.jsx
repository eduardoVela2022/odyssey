/* eslint-disable react/prop-types */

// Imports
import { useMutation } from "@apollo/client";
import IconButton from "../UI/IconButton";
import { DELETE_ADVENTURE } from "../../utils/mutation";
import { useNavigate } from "react-router-dom";

// Adventure grid item component
function AdventureGridItem({ adventure, refetch }) {
  // Navigation
  const navigate = useNavigate();

  // Mutation to delete an adventure
  const [deleteAdventure, { error }] = useMutation(DELETE_ADVENTURE);

  // Goes to the single adventure page of the selected adventure
  function handleAdventureDetails(e) {
    // Stops the event from activating other events
    e.stopPropagation();

    // Goes to single adventure page
    navigate(`/adventure/${adventure._id}`);
  }

  // Deletes the adventure from the user's adventure list
  async function handleDeleteAdventure(e) {
    // Stops the event from activating other events
    e.stopPropagation();

    try {
      // Deletes adventure
      await deleteAdventure({
        variables: {
          _id: adventure._id,
        },
      });

      // Refetches get user adventures query
      refetch();
    } catch (error) {
      // If an error occurs, log it to the console
      console.log(error);
    }
  }

  // View
  return (
    <li
      className="adventures-grid-item-container"
      onClick={handleAdventureDetails}
    >
      <h5 className="adventures-grid-item-title">{adventure.destination}</h5>
      <p>{adventure.country}</p>
      <p>Depart: {adventure.departureDate}</p>
      <p>Return: {adventure.returnDate}</p>

      <div className="button-set-container">
        <IconButton
          icon={"/delete-icon.svg"}
          alt={"Delete button icon"}
          onClick={handleDeleteAdventure}
        />
      </div>
    </li>
  );
}

// Export
export default AdventureGridItem;
