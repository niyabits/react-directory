import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Folder, Wrapper } from '../.';
import styled from 'styled-components';

const Container = styled.main`
  max-width: 700px;
  margin: auto;
  padding: 0 12px;
`;
const App = () => {
  return (
    <Container>
      <Wrapper>
        <Folder text="JavaScript">
          <Folder text="Closures">file_within</Folder>
        </Folder>
        <Folder text="React">file_within</Folder>
        <Folder text="Rust">rust_files_within</Folder>
      </Wrapper>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
