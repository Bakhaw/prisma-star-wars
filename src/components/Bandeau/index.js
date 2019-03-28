import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: auto;
  width: 100%;
`;

export default function Bandeau({ description, src }) {
  return <Image alt={description} src={src} />;
}
