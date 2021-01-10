import React from 'react';
import styled, { x } from '@xstyled/styled-components';

import { Avatar } from 'components/Avatar';

export const NameAndTitle: React.FC = () => {
  return (
    <Container>
      <Avatar src="/avatar.jpg" size={128} />
      <x.div pl={8}>
        <Name>G4RDS</Name>
        <Title>Front-end engineer</Title>
      </x.div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.h1`
  color: gray-700;
  font-size: 5xl;
  font-weight: bold;
`;

const Title = styled.div`
  color: gray-700;
  font-size: 3xl;
  font-weight: medium;
`;
