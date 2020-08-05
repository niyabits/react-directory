import * as React from 'react';
import Folder from './Folder';
import styled from 'styled-components';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

const Wrapper: React.FC = ({ children }) => {
  return (
    <Router>
      <Container>
        <h1>React Directory</h1>
        <Link to="../">
          <p>...</p>
        </Link>
        <Switch>
          <Route exact path="/">
            {children}
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export { Folder, Wrapper };
