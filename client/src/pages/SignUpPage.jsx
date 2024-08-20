// Imports
import { useState } from "react";
import FormInputField from "../components/Form/FormInputField";
import FormTitle from "../components/Form/FormTitle";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";

// Sign up page
function SignUpPage() {
  // States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Header navigation bar routes
  const navBarRoutes = [
    { name: "Login", link: "/" },
    { name: "Sign up", link: "/sign-up" },
  ];

  // Functions
  function handleSubmit(e) {
    e.preventDefault();

    console.log(username);
    console.log(password);
    console.log(confirmPassword);
  }

  // View
  return (
    <div>
      <Header navBarRoutes={navBarRoutes} />

      <main className="main-container">
        <form className="form-container">
          <FormTitle title="Sign in" />

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

          <FormInputField
            label="Confirm password:"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />

          <Button text="Sign in" onClick={handleSubmit} type="submit" />
        </form>
      </main>
    </div>
  );
}

// Export
export default SignUpPage;
