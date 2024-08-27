// Import
import decode from "jwt-decode";

// Class that holds all the auth functions
class AuthService {
  // Gets the profile of the token holder
  getProfile() {
    return decode(this.getToken());
  }

  // Gets the login token of the user and checks if it is expired
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  // Checks if a login token is expired or not
  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  // Gets login token from localstorage
  getToken() {
    return localStorage.getItem("id_token");
  }

  // Creates login token and redirects the user to its adventures page
  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/adventures");
  }

  // Deletes the login token and reloads the website
  logout() {
    localStorage.removeItem("id_token");
    window.location.reload();
  }
}

// Export
export default new AuthService();
