/* eslint-disable react/prop-types */

// Odyssey list item component
function OdysseyListItem({ title, description }) {
  return (
    <li className="odyssey-list-item-container">
      <h5 className="odyssey-list-item-title">{title}</h5>
      <p>{description}</p>
    </li>
  );
}

// Export
export default OdysseyListItem;
