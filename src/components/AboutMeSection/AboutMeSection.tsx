import React from 'react';
import { NameAndTitle } from './NameAndTitle';
import { PickUpWorks } from './PickUpWorks';

export const AboutMeSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <NameAndTitle />
      <PickUpWorks />
    </div>
  );
};
