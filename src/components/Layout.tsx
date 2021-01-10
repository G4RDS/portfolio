import React from 'react';
import { x } from '@xstyled/styled-components';

export const Layout: React.FC = ({ children }) => {
  return (
    <x.div minHeight="full" p={8} backgroundColor="gray-50">
      {children}
    </x.div>
  );
};
