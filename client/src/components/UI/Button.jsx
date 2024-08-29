/* eslint-disable react/prop-types */

// Button component
function Button({ text, onClick, type, disabled = false }) {
  // View
  return (
    <button
      className={disabled ? "disabled-btn" : "primary-btn"}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// Export
export default Button;
