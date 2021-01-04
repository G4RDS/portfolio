import { Avatar } from 'components/Avatar';
import React from 'react';

interface Props {
  imageUrl: string;
  name: string;
}

export const SkillItem: React.FC<Props> = ({ imageUrl, name }) => {
  return (
    <div className="w-24">
      <Avatar src={imageUrl} size={96} />
      <div className="text-base text-gray-700 font-bold text-center">
        {name}
      </div>
    </div>
  );
};
