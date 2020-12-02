import './App.css';
import Search from './components/Search';
import CityChart from './components/CityChart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>  
      <div>      
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/:cityId" exact component={CityChart} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
