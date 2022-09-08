
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
  
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  function updateToken(userToken) {
    setToken(userToken);
    localStorage.setItem('token', userToken);
  }

  async function updateProfile(userData) {
    let response = await JoblyApi.updateProfile(userData, user.username);
    setUser(response);
  }
  
  useEffect(function fetchUser() {
    async function updateUser() {
      if (token) {
        try {
          let userObj = jwt_decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getUser(userObj);
          setUser(currentUser);
        } catch (err) {
          setUser(null);
        }
      } else {

        setUser(null);
      }
    }
    updateUser();
  }, [token]);

  /** Log out user, clear token, clear localStorage */
  function logout() {
    setUser(null);
    setToken("");
    JoblyApi.token = "";
    localStorage.removeItem('token');
  }

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList updateProfile={updateProfile} 
                      updateToken={updateToken} 
                      token={token}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>

  );
}

export default App;
