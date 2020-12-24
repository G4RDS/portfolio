import React from 'react';
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
  isActive,
  href,
}) => {
  const borderColor = isActive ? 'border-blue-500' : 'border-white';
  const fontColor = isActive ? 'text-blue-600' : 'text-gray-600';

  return (
    <a
      className={`flex items-center w-full mt-6 py-2 pl-8 border-r-4 ${borderColor} transition-all first:mt-0 hover:border-blue-500`}
      href={href}
    >
      <FontAwesomeIcon
        className={`text-2xl ${fontColor}`}
        icon={getIcon(icon)}
        fixedWidth
      />
      <span className={`ml-3 text-xl font-medium ${fontColor}`}>{name}</span>
    </a>
  );
};
