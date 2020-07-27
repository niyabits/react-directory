import * as React from 'react';
import Folder from './Folder';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 12px;
  font-family: sans-serif;
  color: #606060;

  h1 {
    color: #303030;
  }
`;

export const Thing = () => {
  return (
    <Wrapper>
      <h1>React Directory</h1>
      <Folder text="JavaScript" />
      <Folder text="React" />
      <Folder text="Rust" />
    </Wrapper>
  );
};
