/* eslint-disable react/prop-types */

// Imports
import IconButton from "../UI/IconButton";

// Odyssey list item component
function OdysseyListItem({ title, description }) {
  return (
    <li className="odyssey-list-item-container">
      <div className="odyssey-list-item-title-container">
        <h5 className="odyssey-list-item-title">{title}</h5>

        <div className="button-set-container">
          <IconButton icon={"/update-icon.svg"} alt={"Update button icon"} />
          <IconButton icon={"/delete-icon.svg"} alt={"Delete button icon"} />
        </div>
      </div>
      <p>{description}</p>
    </li>
  );
}

// Export
export default OdysseyListItem;
