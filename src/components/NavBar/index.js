import React from 'react';
import styled from 'styled-components';

import BurgerMenu from './BurgerMenu';
import NavLinks from './NavLinks';

const Nav = styled.nav`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: 0 50px;
`;

const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Link = styled.li`
  text-transform: uppercase;
`;

export default function NavBar() {
  const isSmallScreen = window.screen.width <= 1000;

  return (
    <Nav>
      {isSmallScreen ? (
        <BurgerMenu />
      ) : (
        <Links>
          {NavLinks.map((link, index) => (
            <Link key={index}>{link}</Link>
          ))}
        </Links>
      )}
    </Nav>
  );
}
