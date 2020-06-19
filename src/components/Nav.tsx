import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.nav`
  border-top: 1px solid #777;
  line-height: 24px;
    >ul {
    display: flex;
      >li{
      width: 33.33333%;
      text-align: center;
      padding: 16px;
      }
    }  
`;

const Nav =()=>{
  return(
  <NavWrapper>
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
  </NavWrapper>
  )
}

export default Nav;