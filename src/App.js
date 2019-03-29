import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Assets
import HeaderBg from './assets/header.png';
import KilorenBg from './assets/kiloren.png';
import StormTroopers from './assets/stormtroopers.jpg';

// Components
import Bandeau from './components/Bandeau';
import BattlefrontAd from './components/BattlefrontAd';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import StarWarsDescription from './components/StarWarsDescription';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  ul {
    padding 0;
  }
  li {
    list-style: none;
  }
`;

const ContentWrapper = styled.div`
  display: ${props => (props.open ? 'none' : 'block')};
`;

export default function App() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <>
      <GlobalStyle />
      <NavBar open={open} toggleMenu={toggleMenu} />
      <ContentWrapper open={open}>
        <Bandeau
          description='Star Wars header background'
          height='100vh'
          sizeMode='cover'
          src={HeaderBg}
        />
        <BattlefrontAd />
        <Bandeau
          description='Kiloren background'
          height='500px'
          sizeMode='cover'
          src={KilorenBg}
        />
        <StarWarsDescription />
        <Bandeau
          description='Storm Troopers background'
          height='250px'
          sizeMode='contain'
          src={StormTroopers}
        />
        <Footer />
      </ContentWrapper>
    </>
  );
}
