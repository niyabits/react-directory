import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Folder, File, DirWrapper, Router } from '../.';
import styled from 'styled-components';

const Container = styled.main`
  font-family: sans-serif;
  max-width: 700px;
  margin: auto;
  padding: 0 12px;
`;

const App = () => {
  return (
    <Container>
      <h1>React Directory Example</h1>
      <Router>
        <DirWrapper>
          <Folder path="/rust">
            <Folder path="rust/something"></Folder>
            <Folder path="rust/rustlings"></Folder>
            <File path="rust/rust-guide">Rust Guide.md</File>
          </Folder>
          <Folder path="/react">
            <File path="/react/react-hooks-everything">
              Everything about React Hooks.md
            </File>
          </Folder>
          <File path="/README.md"> README.md </File>
        </DirWrapper>
      </Router>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
