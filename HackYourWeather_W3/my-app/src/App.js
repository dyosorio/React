import './App.css';
import Search from './components/Search';
import { FaHome } from 'react-icons/fa';
import CityChart from './components/CityChart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"><FaHome /></Link>
            </li>
            <li>
              <Link to="/cityChart">CityChart</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/cityChart">
            <CityChart />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
