/* eslint-disable react/prop-types */

// Imports
import AdventureGridItem from "./AdventureGridItem";

// Adventure grid component
function AdventureGrid({ adventures, refetch }) {
  return (
    <ul className="adventures-grid-container">
      {adventures.map((adventure) => (
        <AdventureGridItem
          key={adventure._id}
          adventure={adventure}
          refetch={refetch}
        />
      ))}
    </ul>
  );
}

// Export
export default AdventureGrid;
