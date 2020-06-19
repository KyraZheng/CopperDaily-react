import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import Tags from './views/Tags';
import Copper from './views/Copper';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';

const Wrapper = styled.div`
min-height: 100vh;
display:flex;
flex-direction: column;
`

const Main = styled.div`
flex-grow: 1;
overflow: auto;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}

export default App;