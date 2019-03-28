import React from 'react';
import { createGlobalStyle } from 'styled-components';

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

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
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
    </div>
  );
}
