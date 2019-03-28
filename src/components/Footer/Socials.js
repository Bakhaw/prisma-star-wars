import React from 'react';
import styled from 'styled-components';

import FacebookIcon from '../../assets/icon_facebook.png';
import InstagramIcon from '../../assets/icon_instagram.png';
import TwitterIcon from '../../assets/icon_twitter.png';

const Wrapper = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  width: 35px;
  margin: 0 10px;
`;

export default function Socials() {
  return (
    <Wrapper>
      <p>FOLLOW STAR WARS</p>
      <Icons>
        <li>
          <Icon src={FacebookIcon} />
        </li>
        <li>
          <Icon src={TwitterIcon} />
        </li>
        <li>
          <Icon src={InstagramIcon} />
        </li>
      </Icons>
    </Wrapper>
  );
}
