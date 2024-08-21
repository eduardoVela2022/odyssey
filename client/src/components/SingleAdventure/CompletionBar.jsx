/* eslint-disable react/prop-types */

// Completion bar component
function CompletionBar({ completed, incompleted, total }) {
  return (
    <div className="completion-bar-container">
      <p>{`Completed ${completed}/${total}`}</p>
      <p>{`Incompleted ${incompleted}/${total}`}</p>
    </div>
  );
}

// Export
export default CompletionBar;
