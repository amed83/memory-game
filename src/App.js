import Dashboard from './components/Dashboard/Dashboard';
import GameOver from './components/GameOver/GameOver';
import HomePage from './pages/HomePage/HomePage';
import styles from './App.module.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/play" >
            <Dashboard />
          </Route>
          <Route exact path="/game-over" >
            <GameOver />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(App);
