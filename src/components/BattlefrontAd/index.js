import React from 'react';
import styled from 'styled-components';

import AdImg from '../../assets/ad.jpg';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  margin: auto;
  padding: 50px 0;
`;

const Paragraphs = styled.div`
  width: 350px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  & span {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  height: 600px;
  width: 300px;
  margin-left: 80px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export default function BattlefrontAd() {
  return (
    <Wrapper>
      <Paragraphs>
        <Paragraph>Star Wars, The Force Awakens</Paragraph>
        <br />
        <Paragraph>
          Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini
          avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
          devenus la « Résistance », combattent les vestiges de l'Empire réunis
          sous la bannière du « Premier Ordre ».
        </Paragraph>
        <br />
        <Paragraph>
          Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador
          et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au
          même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la
          planète désertique Jakku, va faire la rencontre de Finn, un
          Stormtrooper en fuite, une rencontre qui bouleversera sa vie.
        </Paragraph>
        <br />
        <Paragraph>
          Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini
          avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
          devenus la « Résistance », combattent les vestiges de l'Empire réunis
          sous la bannière du « Premier Ordre ».
        </Paragraph>
        <br />
        <Paragraph>
          Un mystérieux guerrier, <span>Kylo Ren</span>, semble vouer un culte à{' '}
          <span>Dark Vador</span>
          et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au
          même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la
          planète désertique Jakku, va faire la rencontre de Finn, un
          <span>Stormtrooper</span> en fuite, une rencontre qui bouleversera sa
          vie.
        </Paragraph>
        <br />
        <Paragraph>
          Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini
          avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
          devenus la « <span>Résistance</span> », combattent les vestiges de
          l'Empire réunis sous la bannière du « <span>Premier Ordre</span> ».
        </Paragraph>
        <br />
        <Paragraph>
          Un mystérieux guerrier, Kylo Ren, semble vouer un culte à{' '}
          <span>Dark Vador</span> et pourchasse les ennemis du Premier Ordre à
          travers la galaxie. Au même moment, une jeune femme nommée Rey,
          pilleuse d'épaves sur la planète désertique Jakku, va faire la
          rencontre de Finn, un Stormtrooper en fuite, une rencontre qui
          bouleversera sa vie.
        </Paragraph>
      </Paragraphs>
      <Image alt='Battlefront PS4 jacket' src={AdImg} />
    </Wrapper>
  );
}
