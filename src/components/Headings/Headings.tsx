/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import Heading from './../Heading'; // Import the generic Heading component
import { HeadingColor } from './../../util/Typegraphy'; // Ensure you have this type defined

// Define individual heading components by calling the generic Heading component with the appropriate level

export const H1: FC<{ color?: HeadingColor; children: React.ReactNode }> = ({ color, children }) => (
  <Heading variant="h1" color={color}>
    {children}
  </Heading>
);

export const H2: FC<{ color?: HeadingColor; children: React.ReactNode }> = ({ color, children }) => (
  <Heading variant="h2" color={color}>
    {children}
  </Heading>
);

export const H3: FC<{ color?: HeadingColor; children: React.ReactNode }> = ({ color, children }) => (
  <Heading variant="h3" color={color}>
    {children}
  </Heading>
);

export const H4: FC<{ color?: HeadingColor; children: React.ReactNode }> = ({ color, children }) => (
  <Heading variant="h4" color={color}>
    {children}
  </Heading>
);

export const H5: FC<{ color?: HeadingColor; children: React.ReactNode }> = ({ color, children }) => (
  <Heading variant="h5" color={color}>
    {children}
  </Heading>
);

export const H6: FC<{ color?: HeadingColor; children: React.ReactNode }> = ({ color, children }) => (
  <Heading variant="h6" color={color}>
    {children}
  </Heading>
);
