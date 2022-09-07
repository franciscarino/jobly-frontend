// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './routing/Navigation';
import RoutesList from './routing/RoutesList';
import userContext from './userContext';
import JoblyApi from './api';
import jwt_decode from "jwt-decode"

/** App component
 * 
 * App -> {Navigation, RoutesList}
 */



function App() {

  const [user, setUser] = useState(null);

  function updateUser(userToken) {
    JoblyApi.token = userToken;
    let userData = jwt_decode(userToken)

    // async function getUserInformation() {}

    console.log("user data object:", userData);
    console.log("API token:", JoblyApi.token)
    setUser(userData);
  }

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation />
          <RoutesList updateUser={updateUser}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>

  );
}

export default App;
