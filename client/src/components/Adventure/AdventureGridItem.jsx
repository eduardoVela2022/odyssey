/* eslint-disable react/prop-types */

// Imports
import IconButton from "../UI/IconButton";

// Adventure grid item component
function AdventureGridItem({ adventure }) {
  return (
    <li className="adventures-grid-item-container">
      <h5 className="adventures-grid-item-title">{adventure.destination}</h5>
      <p>{adventure.country}</p>
      <p>Depart: {adventure.departureDate}</p>
      <p>Return: {adventure.returnDate}</p>

      <div className="button-set-container">
        <IconButton icon={"/update-icon.svg"} alt={"Update button icon"} />
        <IconButton icon={"/delete-icon.svg"} alt={"Delete button icon"} />
      </div>
    </li>
  );
}

// Export
export default AdventureGridItem;
