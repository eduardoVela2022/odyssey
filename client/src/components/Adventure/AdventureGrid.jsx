/* eslint-disable react/prop-types */
import AdventureGridItem from "./AdventureGridItem";

// Adventure grid component
function AdventureGrid({ adventures }) {
  return (
    <ul>
      {adventures.map((adventure) => (
        <AdventureGridItem
          key={adventure.id}
          destination={adventure.destination}
          country={adventure.country}
          dataOfAdventure={adventure.dataOfAdventure}
        />
      ))}
    </ul>
  );
}

// Export
export default AdventureGrid;
