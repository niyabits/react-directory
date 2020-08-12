import * as React from 'react';
import { useHistory, Route } from 'react-router-dom';
import LinkRenderer from './LinkRenderer';

const Folder: React.FC<{ path: string }> = ({ path, children }) => {
  const history = useHistory();
  return (
    <Route exact path={path}>
      <>
        <a href="#" onClick={() => history.goBack()}>
          ../
        </a>
        <LinkRenderer children={children} />
      </>
    </Route>
  );
};

export default Folder;
