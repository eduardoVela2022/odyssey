/* eslint-disable react/prop-types */

// Adventure grid item component
function AdventureGridItem({ destination, country, dataOfAdventure }) {
  return (
    <li>
      <h5>{destination}</h5>
      <p>{country}</p>
      <p>{dataOfAdventure}</p>
    </li>
  );
}

// Export
export default AdventureGridItem;
