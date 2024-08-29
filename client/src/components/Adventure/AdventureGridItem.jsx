/* eslint-disable react/prop-types */

// Imports
import { useMutation } from "@apollo/client";
import IconButton from "../UI/IconButton";
import { DELETE_ADVENTURE } from "../../utils/mutation";

// Adventure grid item component
function AdventureGridItem({ adventure, refetch }) {
  // Mutation to delete an adventure
  const [deleteAdventure, { error }] = useMutation(DELETE_ADVENTURE);

  // Deletes the adventure from the user's adventure list
  async function handleDeleteAdventure(e) {
    // Stops the event from activating the delete events of other adventure grid items
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
    <li className="adventures-grid-item-container">
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
