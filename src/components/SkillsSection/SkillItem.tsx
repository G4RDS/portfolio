import React from 'react';
import { x } from '@xstyled/styled-components';

import { Avatar } from 'components/Avatar';

interface Props {
  imageUrl: string;
  name: string;
}

export const SkillItem: React.FC<Props> = ({ imageUrl, name }) => {
  return (
    <x.li w={24}>
      <Avatar src={imageUrl} sizePx={96} />
      <x.div
        color="gray-700"
        fontSize="base"
        lineHeight="normal"
        fontWeight="bold"
        textAlign="center"
      >
        {name}
      </x.div>
    </x.li>
  );
};
