/* eslint-disable react/prop-types */

// Imports
import OdysseyListItem from "./OdysseyListItem";

// Odyssey list component
function OdysseyList({ odysseys }) {
  return (
    <ul className="odyssey-list-container">
      {odysseys.map((odyssey) => (
        <OdysseyListItem
          key={odyssey.id}
          title={odyssey.title}
          description={odyssey.description}
        />
      ))}
    </ul>
  );
}

// Export
export default OdysseyList;
