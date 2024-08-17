/* eslint-disable react/prop-types */

// Button component
function Button({ text, onClick, type }) {
  // View
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}

// Export
export default Button;
