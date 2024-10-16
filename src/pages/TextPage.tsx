/** @jsxImportSource @emotion/react */
import React from 'react';
import { Button, H1, H2, H3, H4, H5, H6, Text } from './../index'; // Import all components

const TestPage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Test Headings */}
      <H1 color="primary">This is H1 Heading</H1>
      <H2 color="secondary">This is H2 Heading</H2>
      <H3>This is H3 Heading</H3>
      <H4>This is H4 Heading</H4>
      <H5>This is H5 Heading</H5>
      <H6>This is H6 Heading</H6>

      {/* Test Text Component */}
      <Text color="primary" variant="body-large">
        This is a large body text
      </Text>
      <Text color="secondary" variant="body-regular">
        This is regular body text
      </Text>
      

      {/* Test Button */}
      <Button>Click Me</Button>
    </div>
  );
};

export default TestPage;
