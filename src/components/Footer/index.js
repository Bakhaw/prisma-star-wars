import React from 'react';
import styled from 'styled-components';

import DarthVaderBg from '../../assets/darthvader.jpg';
import Socials from './Socials';

const Wrapper = styled.footer`
  max-width: 100vw;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 270px;
  text-align: center;
  color: #9b9b9b;
  background-image: ${props => `url('${props.backgroundImage}')`};
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1000px) {
    padding: 50px 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const Links = styled.ul`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 30vw);
  grid-template-rows: repeat(3, 40px);
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 50vw);
  }
`;

const Link = styled.li`
  text-decoration: underline;
`;

const FooterLinks = [
  'Terms of Use',
  'Legal Notices',
  'Privacy Policy',
  'Your California Privacy Rights',
  'Star Wars at Disney Store',
  'Privacy Policy'
];

export default function Footer() {
  return (
    <Wrapper backgroundImage={DarthVaderBg}>
      <span>TM Lucasfilm Ltd. All Rights Reserved.</span>
      <Row>
        <Links>
          {FooterLinks.map((link, index) => (
            <Link key={index}>{link}</Link>
          ))}
        </Links>
        <Socials />
      </Row>
    </Wrapper>
  );
}
