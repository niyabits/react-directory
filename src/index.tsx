import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LinkRenderer from './LinkRenderer';
import DirWrapper from './DirWrapper';
import Folder from './Folder';

function Thing() {
  return (
    <>
      <Router>
        <DirWrapper>
          <Folder path="/rust">
            <Folder path="rust/something" />
            <Folder path="rust/rustlings" />
          </Folder>
          <Folder path="/react"></Folder>
        </DirWrapper>
      </Router>
    </>
  );
}

export { Thing, Folder, LinkRenderer };
