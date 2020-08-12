import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Folder, DirWrapper, Router } from '../.';
import styled from 'styled-components';

const Container = styled.main`
  max-width: 700px;
  margin: auto;
  padding: 0 12px;
`;

const App = () => {
  return (
    <Container>
      <Router>
        <DirWrapper>
          <Folder path="/rust">
            <Folder path="rust/something" />
            <Folder path="rust/rustlings" />
          </Folder>
          <Folder path="/react"></Folder>
        </DirWrapper>
      </Router>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
