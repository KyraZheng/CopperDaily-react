import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Tags from './views/Tags';
import Copper from './views/Copper';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';



function App() {
  return (
    <Router>

        <Switch>
          <Route path="/tags">
            <Tags/>
          </Route>
          <Route path="/copper">
            <Copper/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Redirect exact from='/' to='/copper'/>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;