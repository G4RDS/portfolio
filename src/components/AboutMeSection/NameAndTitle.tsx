import { Avatar } from 'components/Avatar';
import React from 'react';

export const NameAndTitle: React.FC = () => {
  return (
    <div className="flex items-center">
      <Avatar src="/avatar.jpg" size={128} />
      <div className="pl-8">
        <h1 className="text-5xl font-bold text-gray-700">G4RDS</h1>
        <div className="text-3xl font-medium text-gray-700">
          Front-end engineer
        </div>
      </div>
    </div>
  );
};
