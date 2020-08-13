import * as React from 'react';
import { useHistory, Route } from 'react-router-dom';
import LinkRenderer from './LinkRenderer';

const Folder: React.FC<{ path: string }> = ({ path, children }) => {
  const history = useHistory();
  return (
    <Route exact path={path}>
      <>
        <button className="btn-back" onClick={() => history.goBack()}>
          ← back
        </button>
        <LinkRenderer children={children} />
      </>
    </Route>
  );
};

export default Folder;
