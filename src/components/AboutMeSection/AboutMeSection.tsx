import React from 'react';
import styled from 'styled-components';

import { NameAndTitle } from './NameAndTitle';
import { PickUpWorks } from './PickUpWorks';

export const AboutMeSection: React.FC = () => {
  return (
    <Container>
      <NameAndTitle />
      <PickUpWorks />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
