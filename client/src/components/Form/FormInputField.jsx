/* eslint-disable react/prop-types */

// Form input field component
function FormInputField({ label, value, onChange, type }) {
  // View
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}

// Export
export default FormInputField;
