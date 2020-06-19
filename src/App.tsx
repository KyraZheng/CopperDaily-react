import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
min-height: 100vh;
display:flex;
flex-direction: column;
`

const Main = styled.div`
flex-grow: 1;
overflow: auto;
`

const Nav = styled.nav`
>ul {
display: flex;
>li{
width: 33.33333%;
text-align: center;
padding: 16px;
}
}

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
        <Nav>
        <ul>
          <li>
            <Link to="/tags">标签</Link>
          </li>
          <li>
            <Link to="/copper">记一笔</Link>
          </li>
          <li>
            <Link to="/statistics">统计</Link>
          </li>
        </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}

function NoMatch() {
return(
  <div>页面不存在</div>
)
}

function Tags() {
  return <h2>标签页</h2>;
}

function Copper() {
  return <h2>记账页</h2>;
}

function Statistics() {
  return <h2>统计页</h2>;
}

export default App;