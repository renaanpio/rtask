import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.title``;

export const SubTitle = styled.h1`
  color: ${({ theme }) => theme.colors.secondaryColor};
  display: flex;
`;

export default function Home() {
  return (
    <>
      <Head>
        <Title>Rtask - Home</Title>
      </Head>
      <Wrapper>
        <Head>
          <Title>Rtask</Title>
        </Head>
        <SubTitle> Ola rtask </SubTitle>
      </Wrapper>
    </>
  );
}
