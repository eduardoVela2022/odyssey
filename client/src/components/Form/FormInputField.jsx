/* eslint-disable react/prop-types */

// Form input field component
function FormInputField({ label, value, onChange, type }) {
  // View
  return (
    <div className="input-field-container">
      <label className="input-field-label">{label}</label>

      {type === "textField" ? (
        <textarea className="input-field textarea-field"></textarea>
      ) : (
        <input
          className="input-field"
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

// Export
export default FormInputField;
