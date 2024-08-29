// Imports
import { useState } from "react";
import FormInputField from "../components/Form/FormInputField";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import PageTitle from "../components/UI/PageTitle";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutation";
import Auth from "../utils/auth";
import { QUERY_USER_ADVENTURES } from "../utils/queries";

// Sign up page
function SignUpPage() {
  // States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Navigation
  const navigate = useNavigate();

  // Mutation to add a user to the database
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // Header navigation bar routes
  const navBarRoutes = [
    { name: "Login", link: "/" },
    { name: "Sign up", link: "/sign-up" },
  ];

  // Handles the form's submit event
  async function handleSubmit(e) {
    // Prevents the page from reloading
    e.preventDefault();

    try {
      // Adds the new user with the provided username and password
      const { data } = await addUser({
        variables: { username, password },
      });

      // Get the user's login token and user it
      Auth.login(data.addUser.token);

      // Go to the user's adventures page
      navigate(`/adventures/${username}`);
    } catch (error) {
      // If an error occurs, log it to the console
      console.log(error);
    }
  }

  // View
  return (
    <div>
      <Header navBarRoutes={navBarRoutes} />

      <main className="main-container">
        <form className="form-container">
          <PageTitle title="Sign in" />

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
