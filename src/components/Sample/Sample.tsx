/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const Sample: React.FC = () => {
  //const theme = useTheme(); // Access the theme

  return (
    <h1
       css={css`
         color: red; // Use theme colors
       `}
    >
      I am a sample component 1.
    </h1>
  );
};

export default Sample;
