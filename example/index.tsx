import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Directory } from '../.';
import styled from 'styled-components';

const Container = styled.main`
  max-width: 700px;
  margin: auto;
  padding: 0 12px;
`;
const App = () => {
  return (
    <Container>
      <Directory />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
