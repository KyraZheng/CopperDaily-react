import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.nav`

    >ul {   
      border-top: 1px solid #777;
      display: flex;
      >li{
      width: 33.33333%;
      text-align: center;
      margin: 20px;
        > a{       
            &.value {
            background:#edfa00 ;
             }
         }
      }  
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="value">标签</NavLink>
        </li>
        <li>
          <NavLink to="/copper" activeClassName="value">记一笔</NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="value">统计</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;