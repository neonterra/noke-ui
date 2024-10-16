// src/Providers/withThemeProvider.tsx
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './../theme/theme';

const withThemeProvider = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => {
    return (props: P) => (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );
};

export default withThemeProvider;
