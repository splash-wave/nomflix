import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: white;
  background-color: rgba(20, 20, 20, 0.8); 
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: solid 5px ${props => props.current ? '#4343be' : 'transparent'};
  transition: border-bottom .3s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(( {location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === '/'}>
        <SLink to='/'>Movies</SLink>
      </Item>
      <Item current={pathname === '/tv'}>
        <SLink to='/tv'>TV</SLink>
      </Item>
      <Item current={pathname === '/search'}>
        <SLink to='/search'>Search</SLink>
      </Item>
    </List>
  </Header>
));

