/* eslint-disable react/prop-types */

// Imports
import AdventureGridItem from "./AdventureGridItem";

// Adventure grid component
function AdventureGrid({ adventures, refetch, username }) {
  // View
  return (
    <ul className="adventures-grid-container">
      {adventures.map((adventure) => (
        <AdventureGridItem
          key={adventure._id}
          adventure={adventure}
          refetch={refetch}
          username={username}
        />
      ))}
    </ul>
  );
}

// Export
export default AdventureGrid;
