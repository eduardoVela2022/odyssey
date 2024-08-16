// Imports
import { useState } from "react";
import FormInputField from "../components/Form/FormInputField";
import FormTitle from "../components/Form/FormTitle";
import Button from "../components/UI/Button";

// Login page
function LoginPage() {
  // States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Functions
  function handleSubmit(e) {
    e.preventDefault();

    console.log(username);
    console.log(password);
  }

  // View
  return (
    <form>
      <FormTitle title="Log in" />

      <FormInputField
        label="Username:"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />

      <FormInputField
        label="Password:"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />

      <Button text="Log in" onClick={handleSubmit} type="submit" />
    </form>
  );
}

// Export
export default LoginPage;
