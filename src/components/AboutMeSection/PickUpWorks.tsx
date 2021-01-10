import React from 'react';
import { x } from '@xstyled/styled-components';

import { pickUpWorks } from 'data/work';
import { PickUpWorkItem } from './PickUpWorkItem';

export const PickUpWorks: React.FC = () => {
  return (
    <x.div
      position="relative"
      w={384 + (pickUpWorks.length - 1) * 16}
      h={288 + (pickUpWorks.length - 1) * 16}
    >
      {pickUpWorks.reverse().map((work, index) => (
        <PickUpWorkItem
          src={work.imageUrl}
          zIndex={pickUpWorks.length - index - 1}
          key={work.id}
        />
      ))}
    </x.div>
  );
};
