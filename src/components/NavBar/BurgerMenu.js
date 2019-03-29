import React from 'react';
import styled from 'styled-components';

import CloseIcon from '../../assets/close.png';
import MenuIcon from '../../assets/menu.png';
import Stars from '../../assets/stars.png';
import NavLinks from './NavLinks';

const Icon = styled.img`
  width: 30px;
  padding: 10px 0;
  right: 10px;
  position: absolute;
`;

const Modal = styled.div`
  background-image: ${props => `url('${props.backgroundImage}')`};
  position: absolute;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Links = styled.ul`
  height: 60%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.li`
  text-transform: uppercase;
  color: #fff;
  font-size: 22px;
`;

export default function BurgerMenu({ open, toggleMenu }) {
  return (
    <>
      <Icon alt='Burger menu icon' onClick={toggleMenu} src={MenuIcon} />
      {open && (
        <Modal backgroundImage={Stars}>
          <Icon alt='Close menu icon' onClick={toggleMenu} src={CloseIcon} />
          <Links>
            {NavLinks.map((link, index) => (
              <Link key={index}>{link}</Link>
            ))}
          </Links>
        </Modal>
      )}
    </>
  );
}
