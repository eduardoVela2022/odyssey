/* eslint-disable react/prop-types */

// Icon button component
function IconButton({ icon, alt }) {
  return (
    <button className="icon-btn">
      <img src={icon} alt={alt} />
    </button>
  );
}

// Export
export default IconButton;
