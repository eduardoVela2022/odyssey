/* eslint-disable react/prop-types */

// Imports
import IconButton from "../UI/IconButton";

// Adventure grid item component
function AdventureGridItem({
  destination,
  country,
  departureDate,
  returnDate,
}) {
  return (
    <li className="adventures-grid-item-container">
      <h5 className="adventures-grid-item-title">{destination}</h5>
      <p>{country}</p>
      <p>Depart: {departureDate.toDateString()}</p>
      <p>Return: {returnDate.toDateString()}</p>

      <div className="button-set-container">
        <IconButton icon={"/update-icon.svg"} alt={"Update button icon"} />
        <IconButton icon={"/delete-icon.svg"} alt={"Delete button icon"} />
      </div>
    </li>
  );
}

// Export
export default AdventureGridItem;
