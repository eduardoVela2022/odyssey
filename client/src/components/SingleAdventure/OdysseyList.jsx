/* eslint-disable react/prop-types */

// Imports
import OdysseyListItem from "./OdysseyListItem";

// Odyssey list component
function OdysseyList({ odysseys }) {
  return (
    <ul>
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
