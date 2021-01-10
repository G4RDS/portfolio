import React from 'react';
import {
  defaultTheme,
  aliasColor,
  ThemeProvider,
  Preflight,
  rpxTransformers,
} from '@xstyled/styled-components';

import { Index } from 'pages/Index';

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    ...aliasColor('gray', 'blue-gray'),
    ...aliasColor('primary', 'blue'),
  },
  shadows: {
    default: '0 4px 6px -1px rgb(51, 65, 85, 0.05)',
    lg: '0 8px 16px rgb(51, 65, 85, 0.05)',
  },
  transformers: {
    ...rpxTransformers,
  },
};

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <Index />
    </ThemeProvider>
  );
};
