import * as React from 'react';
import { useHistory, Route } from 'react-router-dom';
import LinkRenderer from './LinkRenderer';

const Folder: React.FC<{ path: string }> = ({ path, children }) => {
  const history = useHistory();
  return (
    <Route exact path={path}>
      <>
        <button onClick={() => history.goBack()}>Back</button>
        <LinkRenderer children={children} />
      </>
    </Route>
  );
};

export default Folder;
