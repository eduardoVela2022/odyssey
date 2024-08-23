/* eslint-disable react/prop-types */

// Imports
import IconButton from "../UI/IconButton";

// Adventure grid item component
function AdventureGridItem({ destination, country, dateOfAdventure }) {
  return (
    <li className="adventures-grid-item-container">
      <h5 className="adventures-grid-item-title">{destination}</h5>
      <p>{country}</p>
      <p>{dateOfAdventure.toDateString()}</p>

      <div className="button-set-container">
        <IconButton icon={"/update-icon.svg"} alt={"Update button icon"} />
        <IconButton icon={"/delete-icon.svg"} alt={"Delete button icon"} />
      </div>
    </li>
  );
}

// Export
export default AdventureGridItem;
