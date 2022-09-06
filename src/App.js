// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import RoutesList from './RoutesList';

/** App component
 * 
 * App -> {Navigation, RoutesList}
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
