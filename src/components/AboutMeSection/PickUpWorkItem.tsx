import React from 'react';
import styled from '@xstyled/styled-components';

interface Props {
  src: string;
  zIndex: number;
}

export const PickUpWorkItem: React.FC<Props> = ({ src, zIndex }) => {
  const translatePx = `${zIndex * 16}px`;

  return (
    <StyledImage
      src={src}
      transform
      translateX={translatePx}
      translateY={translatePx}
    />
  );
};

const StyledImage = styled.imgBox`
  position: absolute;
  top: 0;
  left: 0;

  width: 96;
  height: 72;
  border-radius: 3xl;
  box-shadow: lg;
`;
