/* eslint-disable react/prop-types */

// Imports
import OdysseyListItem from "./OdysseyListItem";

// Odyssey list component
function OdysseyList({ odysseys, refetch }) {
  return (
    <ul className="odyssey-list-container">
      {odysseys.map((odyssey) => (
        <OdysseyListItem
          key={odyssey._id}
          odyssey={odyssey}
          refetch={refetch}
        />
      ))}
    </ul>
  );
}

// Export
export default OdysseyList;
