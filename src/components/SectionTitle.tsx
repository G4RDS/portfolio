import React from 'react';
import { x } from '@xstyled/styled-components';

export const SectionTitle: React.FC = ({ children }) => {
  return (
    <x.h1 color="gray-700" fontSize="3xl" fontWeight="bold">
      {children}
    </x.h1>
  );
};
