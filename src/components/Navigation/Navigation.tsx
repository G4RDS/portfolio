import React from 'react';
import styled, { x } from '@xstyled/styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/pro-regular-svg-icons';

export const Navigation: React.FC = ({ children }) => {
  return (
    <Container>
      <x.ul flex="1 1 0">{children}</x.ul>
      <CopyRightWrapper>
        <FontAwesomeIcon icon={faCopyright} />
        <x.span ml={2}>Yuki SENSUI, G4RDS</x.span>
      </CopyRightWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 2rem;
  bottom: 2rem;
  left: 2rem;

  display: flex;
  flex-direction: column;

  width: 72;
  padding: 8 0;
  border-radius: 3xl;
  background: white;
  box-shadow: lg;
`;

const CopyRightWrapper = styled.div`
  margin-top: 6;
  padding-left: 8;

  color: gray-500;
  font-size: base;
  line-height: normal;
  font-weight: medium;
`;
