import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  background-image: ${props => `url('${props.src}')`};
  background-size: ${props => props.size};
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: ${props => props.height};
  width: 100%;
  @media (max-width: 1000px) {
    background-attachment: unset;
    background-size: cover;
    height: 400px;
  }
`;

export default function Bandeau({ description, height, sizeMode, src }) {
  return <Image alt={description} height={height} size={sizeMode} src={src} />;
}
