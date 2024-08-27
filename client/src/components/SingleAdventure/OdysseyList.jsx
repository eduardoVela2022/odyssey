/* eslint-disable react/prop-types */

// Imports
import OdysseyListItem from "./OdysseyListItem";

// Odyssey list component
function OdysseyList({ odysseys }) {
  return (
    <ul className="odyssey-list-container">
      {odysseys.map((odyssey) => (
        <OdysseyListItem key={odyssey.id} odyssey={odyssey} />
      ))}
    </ul>
  );
}

// Export
export default OdysseyList;
