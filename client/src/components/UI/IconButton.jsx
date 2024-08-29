/* eslint-disable react/prop-types */

// Icon button component
function IconButton({ icon, alt, onClick }) {
  return (
    <button className="icon-btn" onClick={onClick}>
      <img src={icon} alt={alt} />
    </button>
  );
}

// Export
export default IconButton;
