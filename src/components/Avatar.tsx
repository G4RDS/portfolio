import React, { useState } from 'react';
import { x } from '@xstyled/styled-components';

import { transparentSrc } from 'consts/image';

interface Props {
  src: string;
  sizePx: number;
}

export const Avatar: React.FC<Props> = ({ src, sizePx }) => {
  const [isError, setIsError] = useState(false);

  return (
    <x.img
      src={isError ? transparentSrc : src}
      width={sizePx}
      height={sizePx}
      onError={() => {
        setIsError(true);
      }}
      w={`${sizePx}px`}
      h={`${sizePx}px`}
      borderRadius="full"
    />
  );
};
