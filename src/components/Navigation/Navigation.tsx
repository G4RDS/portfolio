import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/pro-regular-svg-icons';

export const Navigation: React.FC = ({ children }) => {
  return (
    <div className="fixed inset-y-8 inset-l-8 flex flex-col w-72 py-8 rounded-3xl bg-white shadow-lg">
      <ul className="flex-grow">{children}</ul>
      <div className="pl-8 mt-6 text-base text-gray-600">
        <FontAwesomeIcon icon={faCopyright} />
        <span className="ml-2">Yuki SENSUI, G4RDS</span>
      </div>
    </div>
  );
};
