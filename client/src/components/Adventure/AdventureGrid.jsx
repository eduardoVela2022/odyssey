/* eslint-disable react/prop-types */

// Imports
import AdventureGridItem from "./AdventureGridItem";

// Adventure grid component
function AdventureGrid({ adventures }) {
  return (
    <ul className="adventures-grid-container">
      {adventures.map((adventure) => (
        <AdventureGridItem
          key={adventure.id}
          destination={adventure.destination}
          country={adventure.country}
          departureDate={adventure.departureDate}
          returnDate={adventure.returnDate}
        />
      ))}
    </ul>
  );
}

// Export
export default AdventureGrid;
