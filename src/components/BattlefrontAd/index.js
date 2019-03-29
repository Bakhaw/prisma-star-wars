import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import styled from 'styled-components';

import AdImg from '../../assets/ad.jpg';

const Wrapper = styled.main`
  width: 60%;
  margin: auto;
  padding: 50px 0;
  position: relative;
  @media (max-width: 1000px) {
    width: 70%;
  }
`;

const Paragraphs = styled.div`
  width: 350px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin: 0 0 30px 0;
  & span {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  height: 600px;
  width: 300px;
  margin-left: 80px;
  position: absolute;
  top: 60px;
  right: 0;
  ${({ imgPosition }) =>
    imgPosition === 'fixed' &&
    `
    top: 60px;
    right: 20%;
    position: fixed;
  `}
  @media (max-width: 1000px) {
    display: none;
  }
`;

export default function BattlefrontAd() {
  const [imgPosition, setImgPosition] = useState('normal');
  const onExit = () => setImgPosition('normal');
  const onProgress = ({ progress }) => {
    if (progress > 0.3) {
      setImgPosition('fixed');
    }
    if (progress < 0.3 || progress > 0.7) {
      onExit();
    }
  };

  return (
    <Wrapper>
      <Paragraphs>
        <ScrollTrigger onExit={onExit} onProgress={onProgress}>
          <Paragraph>Star Wars, The Force Awakens</Paragraph>
          <Paragraph>
            Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini
            avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
            devenus la « Résistance », combattent les vestiges de l'Empire
            réunis sous la bannière du « Premier Ordre ».
          </Paragraph>
          <Paragraph>
            Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador
            et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au
            même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la
            planète désertique Jakku, va faire la rencontre de Finn, un
            Stormtrooper en fuite, une rencontre qui bouleversera sa vie.
          </Paragraph>
          <Paragraph>
            Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini
            avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
            devenus la « Résistance », combattent les vestiges de l'Empire
            réunis sous la bannière du « Premier Ordre ».
          </Paragraph>
          <Paragraph>
            Un mystérieux guerrier, <span>Kylo Ren</span>, semble vouer un culte
            à <span>Dark Vador</span> et pourchasse les ennemis du Premier Ordre
            à travers la galaxie. Au même moment, une jeune femme nommée Rey,
            pilleuse d'épaves sur la planète désertique Jakku, va faire la
            rencontre de Finn, un <span>Stormtrooper</span> en fuite, une
            rencontre qui bouleversera sa vie.
          </Paragraph>
          <Paragraph>
            Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini
            avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
            devenus la « <span>Résistance</span> », combattent les vestiges de
            l'Empire réunis sous la bannière du « <span>Premier Ordre</span> ».
          </Paragraph>
          <Paragraph>
            Un mystérieux guerrier, Kylo Ren, semble vouer un culte à{' '}
            <span>Dark Vador</span> et pourchasse les ennemis du Premier Ordre à
            travers la galaxie. Au même moment, une jeune femme nommée Rey,
            pilleuse d'épaves sur la planète désertique Jakku, va faire la
            rencontre de Finn, un Stormtrooper en fuite, une rencontre qui
            bouleversera sa vie.
          </Paragraph>
        </ScrollTrigger>
      </Paragraphs>
      <Image
        alt='Battlefront PS4 jacket'
        imgPosition={imgPosition}
        src={AdImg}
      />
    </Wrapper>
  );
}
