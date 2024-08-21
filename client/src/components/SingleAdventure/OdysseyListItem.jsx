/* eslint-disable react/prop-types */

// Odyssey list item component
function OdysseyListItem({ title, description }) {
  return (
    <li>
      <h5>{title}</h5>
      <p>{description}</p>
    </li>
  );
}

// Export
export default OdysseyListItem;
