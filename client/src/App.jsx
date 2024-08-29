// Imports
import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Footer from "./components/UI/Footer";
import "./App.css";

// GraphQL endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Attaches auth token to all requests
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// App view
function App() {
  // View
  return (
    <ApolloProvider client={client}>
      <>
        <Outlet />

        <Footer />
      </>
    </ApolloProvider>
  );
}

// Export
export default App;
