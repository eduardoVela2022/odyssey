/* eslint-disable react/prop-types */
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
          dateOfAdventure={adventure.dateOfAdventure}
        />
      ))}
    </ul>
  );
}

// Export
export default AdventureGrid;
