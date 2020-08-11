import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import LinkRenderer from 'LinkRenderer';

const Folder: React.FC<{ path: string }> = ({ path, children }) => {
  return (
    <Route exact path={path}>
      <>
        <Link to="../">
          <span>../</span>
          <LinkRenderer children={children} />
        </Link>
      </>
    </Route>
  );
};

export default Folder;
