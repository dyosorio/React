import './App.css';
import Search from './components/Search';
import CityChart from './components/CityChart';
import { FaHome } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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
              <Link to="/:id">CityChart</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/:cityId" exact component={CityChart} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
