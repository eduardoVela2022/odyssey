/* eslint-disable react/prop-types */

// Imports
import { useMutation } from "@apollo/client";
import { DELETE_ODYSSEY } from "../../utils/mutation";
import IconButton from "../UI/IconButton";
import { useParams } from "react-router-dom";

// Odyssey list item component
function OdysseyListItem({ odyssey, refetch }) {
  // Obtains the id of the adventure that was passed in the URL as a parameter
  const { id: adventureParam } = useParams();

  // Mutation to delete an odyssey
  const [deleteOdyssey] = useMutation(DELETE_ODYSSEY);

  // Deletes the odyssey from the adventure's odyssey list
  async function handleDeleteOdyssey(e) {
    // Stops the event from activating other events
    e.stopPropagation();

    try {
      // Deletes odyssey
      await deleteOdyssey({
        variables: {
          adventureId: adventureParam,
          odysseyId: odyssey._id,
        },
      });

      // Refetches get adventure query
      refetch();
    } catch (error) {
      // If an error occurs, log it to the console
      console.log(error);
    }
  }

  // View
  return (
    <li className="odyssey-list-item-container">
      <h5 className="odyssey-list-item-title">{odyssey.title}</h5>

      <p>{odyssey.description}</p>

      <div className="button-set-container">
        <IconButton
          icon={"/delete-icon.svg"}
          alt={"Delete button icon"}
          onClick={handleDeleteOdyssey}
        />
      </div>
    </li>
  );
}

// Export
export default OdysseyListItem;
