import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DirWrapper, Folder, File } from '../.';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const Container = styled.main`
  max-width: 700px;
  margin: auto;
  padding: 0 12px;
`;

const App = () => {
  return (
    <Router>
      <Container>
        <DirWrapper>
          <Folder path="/react">
            <File />
          </Folder>
          <File />
          <Folder path="/rust">
            <Folder path="/rustlings"></Folder>
            <Folder path="/rustbook"></Folder>
          </Folder>
        </DirWrapper>
      </Container>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
