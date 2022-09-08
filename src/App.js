
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './routing/Navigation';
import RoutesList from './routing/RoutesList';
import userContext from './userContext';
import JoblyApi from './api';
import jwt_decode from "jwt-decode";

/** App component
 * 
 * Handles authentication of user and sets token on JoblyApi class.
 * 
 * State: user, token
 * 
 * App -> {Navigation, RoutesList}
 */

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  function updateToken(userToken) {
    JoblyApi.token = userToken;
    setToken(userToken);
  }

  useEffect(function fetchUser() {
    async function updateUser() {
      try {
        let userObj = jwt_decode(token);
        let currentUser = await JoblyApi.getUser(userObj);
        setUser(currentUser);
      } catch (err) {
        setUser(null);
      }
    }
    updateUser();
  }, [token]);
  function logout() {
    setUser(null);
    JoblyApi.token = "";
  }

  console.log("API Token: ", JoblyApi.token);

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList updateToken={updateToken} />
        </BrowserRouter>
      </userContext.Provider>
    </div>

  );
}

export default App;
