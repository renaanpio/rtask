import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h1`
  color: 'red';
`;

export default function Home() {
  return (
    <Wrapper>
      <Title> Ola rtask </Title>
    </Wrapper>
  );
}
