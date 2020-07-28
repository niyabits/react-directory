import * as React from 'react';
import Folder from './Folder';
import styled from 'styled-components';

const Container = styled.section`
  padding: 12px;
  font-family: sans-serif;
  color: #606060;

  h1 {
    color: #303030;
  }
`;

const Wrapper: React.FC<{ children: React.FC }> = ({ children }) => {
  return (
    <Container>
      <h1>React Directory</h1>
      <p>...</p>
      {children}
    </Container>
  );
};

export { Folder, Wrapper };
