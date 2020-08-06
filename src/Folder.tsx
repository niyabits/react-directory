import * as React from 'react';
import FolderIcon from './icons/FolderIcon.js';
import styled from 'styled-components';
import { Switch, Link, Route } from 'react-router-dom';

const Wrapper = styled.section`
  display: flex;
  align-content: center;

  svg {
    padding-right: 12px;
    width: 30px;
  }
`;

const Text = styled.span`
  display: flex;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Folder: React.FC<{ text: string }> = ({ text, children }) => {
  return (
    <Wrapper>
      <FolderIcon />
      <Link to="/folder">
        <Text>{text}</Text>
      </Link>
      <div>
        <Route path="/folder">
          <Switch>{children}</Switch>
        </Route>
      </div>
    </Wrapper>
  );
};

export default Folder;
