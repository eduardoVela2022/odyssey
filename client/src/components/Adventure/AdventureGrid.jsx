/* eslint-disable react/prop-types */

// Imports
import AdventureGridItem from "./AdventureGridItem";

// Adventure grid component
function AdventureGrid({ adventures }) {
  return (
    <ul className="adventures-grid-container">
      {adventures.map((adventure) => (
        <AdventureGridItem key={adventure.id} adventure={adventure} />
      ))}
    </ul>
  );
}

// Export
export default AdventureGrid;
