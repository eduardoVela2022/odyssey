// Imports
import { useState } from "react";
import FormInputField from "../components/Form/FormInputField";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";
import { LOGIN_USER } from "../utils/mutation";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

// Login page
function LoginPage() {
  // States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Mutation to login a user
  const [login] = useMutation(LOGIN_USER);

  // Header navigation bar routes
  const navBarRoutes = [
    { name: "Login", link: "/" },
    { name: "Sign up", link: "/sign-up" },
  ];

  // Checks if fields are filled
  function fieldsAreFilled() {
    if (!username || !password) {
      return true;
    } else {
      return false;
    }
  }

  // Handles the form's submit event
  async function handleSubmit(e) {
    // Prevents the page from reloading
    e.preventDefault();

    try {
      // Tries to login the user with the given username and password
      const { data } = await login({ variables: { username, password } });

      // If the user exists create login token and use it
      // Go to the user's adventures page
      Auth.login(data.login.token, username);
    } catch (error) {
      // If an error occurs, log it to the console
      console.log(error);
    }
  }

  // View
  return (
    <>
      <Header navBarRoutes={navBarRoutes} />

      <main className="main-container">
        <form className="form-container">
          <PageTitle title="Login" />

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

          <Button
            text="Login"
            onClick={handleSubmit}
            type="submit"
            disabled={fieldsAreFilled()}
          />
        </form>
      </main>
    </>
  );
}

// Export
export default LoginPage;
