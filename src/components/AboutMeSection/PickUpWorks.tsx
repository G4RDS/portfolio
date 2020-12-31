import React from 'react';

import { pickUpWorks } from 'data/work';
import { PickUpWorkItem } from './PickUpWorkItem';

export const PickUpWorks: React.FC = () => {
  const width = 384 + (pickUpWorks.length - 1) * 16;
  const height = 288 + (pickUpWorks.length - 1) * 16;

  return (
    <div
      className="relative"
      style={{
        width,
        height,
      }}
    >
      {pickUpWorks.reverse().map((work, index) => (
        <PickUpWorkItem
          src={work.imageUrl}
          zIndex={pickUpWorks.length - index - 1}
          key={work.id}
        />
      ))}
    </div>
  );
};
