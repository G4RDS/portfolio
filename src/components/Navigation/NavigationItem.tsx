import React from 'react';
import styled, { css, th } from '@xstyled/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AllowedIcons, getIcon } from './module';

interface Props {
  name: string;
  icon: AllowedIcons;
  isActive?: boolean;
  href?: string;
}

export const NavigationItem: React.FC<Props> = ({
  name,
  icon,
  isActive = false,
  href,
}) => {
  return (
    <StyledAnchor href={href} isActive={isActive}>
      <IconWrapper isActive={isActive}>
        <FontAwesomeIcon icon={getIcon(icon)} fixedWidth />
      </IconWrapper>
      <NavName isActive={isActive}>{name}</NavName>
    </StyledAnchor>
  );
};

const StyledAnchor = styled.a<{ isActive: boolean }>`
  ${(p) => css`
    display: flex;
    align-items: center;

    width: full;
    margin: 6 0;
    padding: 2 0 2 8;
    border-right-width: 4;
    border-right-style: solid;
    border-color: ${p.isActive ? th.color('primary-500') : 'white'};

    transition: all;

    &:first-child {
      margin-top: 0;
    }

    &:hover {
      border-color: ${th.color('primary-500')};
    }
  `}
`;

const IconWrapper = styled.div<{ isActive: boolean }>`
  ${(p) => css`
    font-size: 2xl;
    color: ${p.isActive ? th.color('primary-600') : th.color('gray-600')};
  `}
`;

const NavName = styled.span<{ isActive: boolean }>`
  ${(p) => css`
    margin-left: 3;
    font-size: xl;
    font-weight: medium;
    color: ${p.isActive ? th.color('primary-600') : th.color('gray-600')};
  `}
`;
