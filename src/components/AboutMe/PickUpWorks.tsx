import React from 'react';

import { Work } from 'consts/work';
import { PickUpWorkItem } from './PickUpWorkItem';

const works: Work[] = [
  {
    id: '1',
    imageUrl: '/example-work.png',
  },
  {
    id: '2',
    imageUrl: '/example-work.png',
  },
];

export const PickUpWorks: React.FC = () => {
  return (
    <div className="relative w-96 h-72">
      {works.reverse().map((work, index) => (
        <PickUpWorkItem
          src={work.imageUrl}
          zIndex={works.length - index - 1}
          key={work.id}
        />
      ))}
    </div>
  );
};
