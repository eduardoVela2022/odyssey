/* eslint-disable react/prop-types */

// Adventure grid item component
function AdventureGridItem({ destination, country, dateOfAdventure }) {
  return (
    <li className="adventures-grid-item-container">
      <h5 className="adventures-grid-item-title">{destination}</h5>
      <p>{country}</p>
      <p>{dateOfAdventure.toDateString()}</p>
    </li>
  );
}

// Export
export default AdventureGridItem;
