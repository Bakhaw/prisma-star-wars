import React from 'react';
import styled from 'styled-components';

const NavLinks = [
  'le côté lumineux',
  'le côté obscur',
  "l'empire",
  'les droïdes',
  'les ewoks',
  'jabba le huit'
];

const Nav = styled.nav`
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
  return (
    <Nav>
      <Links>
        {NavLinks.map((link, index) => (
          <Link key={index}>{link}</Link>
        ))}
      </Links>
    </Nav>
  );
}
