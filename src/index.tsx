import * as React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Folder from './Folder';

const Container = styled.section`
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    &:hover {
      text-decoration: underline;
    }
  }
  padding: 12px;
  font-family: sans-serif;
  color: #606060;

  h1 {
    color: #303030;
  }
`;

// <Folder />
// 1. All the Links (to display the links)
// 2. Children of the links (to route)

const Directory: React.FC = () => {
  return (
    <Router>
      <Container>
        <h1>React Directory</h1>
        {/* Links of Folder */}
        <Link to="../">...</Link>
        <Folder isLink={true} text="folder" key="folder" />
        <Folder isLink={true} text="folder2" key="folder2" />
        {/* View of the folders */}
        <hr />
        <Switch>
          {/*
          <Folder isLink={false} text="folder" key="folder">
            Folder 1 Content
</Folder>
*/}
          <Route path="/folder">Folder 1 Contents</Route>
          <Folder isLink={false} text="folder2" key="folder2">
            Folder 2 Content
          </Folder>
          {/*
          <Route path="/folder">Folder 1 Contents</Route>
          <Route path="/folder2">Folder 2 Contents</Route>
          */}
        </Switch>
      </Container>
    </Router>
  );
};

export { Directory };
