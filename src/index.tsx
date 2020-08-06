import * as React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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

const Directory: React.FC = () => {
  return (
    <Router>
      <Container>
        <h1>React Directory</h1>
        {/* Links of Folder */}
        <Link to="../">...</Link>
        <Link to="/folder">Folder</Link>
        <Link to="/folder2">Folder2</Link>
        {/* View of the folders */}
        <hr />
        <Switch>
          <Route path="/folder">Folder 1 Contents</Route>
          <Route path="/folder2">Folder 2 Contents</Route>
        </Switch>
      </Container>
    </Router>
  );
};

export { Directory };
